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
      const topFixedOffset = options.top.toFixed();
      const windowFixedOffset = window.pageYOffset.toFixed();

      if (topFixedOffset === windowFixedOffset) {
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
