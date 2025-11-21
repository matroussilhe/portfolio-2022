export const SCROLL_OFFSET_THRESHOLD = 4;

export type ScrollToOptions = {
  top: number;
  left?: number;
  behavior?: ScrollBehavior;
};

/**
 * Hook containing scroll helper functions
 *
 * @returns function to scroll to position
 */
export const useScroll = () => {
  const hasWindow = typeof window !== "undefined";

  const scrollTo = (options: ScrollToOptions, callback: () => void) => {
    if (!hasWindow) return;

    // listen to scroll
    const onScroll = () => {
      const topFixedOffset = Math.round(options.top);
      const windowFixedOffset = Math.round(window.pageYOffset);
      const scrollOffset = Math.abs(topFixedOffset - windowFixedOffset);

      if (scrollOffset <= SCROLL_OFFSET_THRESHOLD) {
        window.removeEventListener("scroll", onScroll);
        callback();
      }
    };
    window.addEventListener("scroll", onScroll);

    // trigger callback even if already at position
    onScroll();

    // scroll to position
    window.scrollTo(options);
  };

  return {
    scrollTo,
  };
};
