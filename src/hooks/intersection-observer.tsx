import {
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

export const areVerticallyOverlapping = (first?: IntersectionObserverEntry, second?: IntersectionObserverEntry) => {
  if (!first || !second) return false;

  return (first.intersectionRect.top <= second.boundingClientRect.top &&
    first.intersectionRect.bottom >= second.intersectionRect.bottom);
};

export const getVerticalCenter = (first?: IntersectionObserverEntry) => {
  if (!first?.intersectionRect) return undefined;

  return first.intersectionRect.top + (first.intersectionRect.height / 2);
};

export const getVerticallyClosestEntry = (first?: IntersectionObserverEntry, second?: IntersectionObserverEntry[]) => {
  if (!first || !second) return undefined;

  const firstVerticalCenter = getVerticalCenter(first) || 0;

  return second?.reduce((acc: any, entry: IntersectionObserverEntry) => {
    const entryVerticalCenter = getVerticalCenter(entry) || 0;

    const difference = Math.abs(firstVerticalCenter - entryVerticalCenter);

    if (acc.difference && difference <= acc.difference) {
      console.log("difference: ", difference);
      console.log("acc.difference: ", acc.difference);
      return {
        difference,
        entry,
      };
    }

    return acc;
  }, { difference: undefined, entry: undefined } as {difference: number | undefined; entry: IntersectionObserverEntry | undefined});
};

// TODO: rename hook or make a separate function cause it checks overlapp not intersection
export const useIntersectionObserver = (targetRefs: RefObject<HTMLDivElement>[], options?: IntersectionObserverInit) => {
  const observerRef = useRef<IntersectionObserver>();

  const [entries, setEntries] = useState<IntersectionObserverEntry[]>();

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries, observer) => {
      setEntries(entries);

      // TODO: search for overlapps between element and targets
      // TODO: go to through each entries to find one where it's rectangle "englobe" or "touch" element
    };

    observerRef.current = new IntersectionObserver(callback, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
      ...options,
    });
  }, [options]);

  useEffect(() => {
    // register observers
    targetRefs.forEach((targetRef) => {
      if (!targetRef.current) return;

      observerRef?.current?.observe?.(targetRef.current);
    });

    return () => {
      // unregister observers
      targetRefs.forEach((targetRef) => {
        if (!targetRef.current) return;

        observerRef?.current?.unobserve?.(targetRef.current);
      });
    };
  }, [targetRefs]);

  return {
    entries,
  };
};
