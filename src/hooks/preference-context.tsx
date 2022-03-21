import React, { useContext } from "react";

import { PreferenceContext } from "@providers";

export const usePreferenceContext = () => {
  return useContext(PreferenceContext);
};
