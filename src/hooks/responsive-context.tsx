import React, { useContext } from "react";

import { ResponsiveContext } from "@providers";

export const useResponsiveContext = () => {
  return useContext(ResponsiveContext);
};
