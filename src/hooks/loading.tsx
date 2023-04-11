import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";

import { LayoutLoading } from "@components/templates/layout-loading";

/**
 * Hook displaying a loading component overlay on route events
 *
 * @returns loading component
 */
export const useLoading = () => {
  const router = useRouter();

  // FIXME: double true (slower loading for case study)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleRouteChangeStart = (url: string, { shallow }: {shallow: boolean}) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    const handleRouteChangeError = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);
    router.events.on("routeChangeError", handleRouteChangeError);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
      router.events.off("routeChangeError", handleRouteChangeError);
    };
  }, [router.events]);

  return (<LayoutLoading loading={loading}/>);
};
