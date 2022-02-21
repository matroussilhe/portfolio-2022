import React, { useEffect, useRef } from "react";

/**
 * Hook that returns state's previous value
 *
 * @returns state's previous value
 */
export const usePreviousState = <T extends unknown>(state: T) => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref.current;
};
