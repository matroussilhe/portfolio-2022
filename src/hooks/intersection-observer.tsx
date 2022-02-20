import {
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

/**
 * React hook implementation of Intersection Observer API
 *
 * @param targetRefs array of refs to obvserve
 * @param options IntersectionObserver options
 *
 * @returns list of entries where the target reported a change in its intersection status
 */
export const useIntersectionObserver = (targetRefs?: RefObject<HTMLDivElement>[], options?: IntersectionObserverInit) => {
  const intersectionObserverRef = useRef<IntersectionObserver>();

  const [entries, setEntries] = useState<IntersectionObserverEntry[]>();

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries) => {
      setEntries(entries);
    };

    // init intersection observer
    intersectionObserverRef.current = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: [0.01, 1],
      ...options,
    });
  }, [options]);

  useEffect(() => {
    if (!targetRefs) return;

    // register targets observers
    targetRefs.forEach((targetRef) => {
      if (!targetRef.current) return;

      intersectionObserverRef?.current?.observe?.(targetRef.current);
    });

    return () => {
      // unregister targets observers
      targetRefs.forEach((targetRef) => {
        if (!targetRef.current) return;

        intersectionObserverRef?.current?.unobserve?.(targetRef.current);
      });
    };
  }, [targetRefs]);

  return {
    entries,
  };
};
