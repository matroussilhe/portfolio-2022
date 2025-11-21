import React, { useCallback, useEffect, useState } from "react";

import { useRouter } from "next/dist/client/router";

import { sendPageview } from "@services";

export const MAX_RETRY_COUNT = 100;

export const useAnalytics = () => {
  const router = useRouter();

  const [initialized, setInitialized] = useState<boolean>(false);

  const waitForGtag = useCallback((onSuccess: () => void, onFailure: () => void) => {
    let retryCount = 0;

    const checkGtag = () => {
      if (typeof window !== "undefined" && (window as any)?.gtag) {
        onSuccess();
      } else if (retryCount < MAX_RETRY_COUNT) {
        retryCount++;
        setTimeout(checkGtag, 100);
      } else {
        onFailure();
      }
    };

    checkGtag();
  }, []);

  // send pageview on init
  useEffect(() => {
    if (initialized) return;

    waitForGtag(
      () => {
        // gtag loaded successfully
        const url = router.asPath;
        sendPageview(url);
        setInitialized(true);
      },
      () => {
        // gtag failed to load
        setInitialized(true);
      }
    );
  }, [initialized, router.asPath, waitForGtag]);

  // send pageview on route change
  useEffect(() => {
    const handleRouteChangeComplete = (url: string) => {
      sendPageview(url);
    };

    // add event listener
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    // remove event listener on cleanup
    return () => router.events.off("routeChangeComplete", handleRouteChangeComplete);
  }, [router.events]);
};
