import React, { useEffect, useState } from "react";

import { useRouter } from "next/dist/client/router";

import { sendPageview } from "@services";

export const useAnalytics = () => {
  const router = useRouter();

  const [initialized, setInitialized] = useState<boolean>(false);

  // send pageview on init
  useEffect(() => {
    if (initialized) return;

    const url = router.asPath;
    sendPageview(url);
    setInitialized(true);
  }, [initialized, router.asPath]);

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
