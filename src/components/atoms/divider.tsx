import React, { FunctionComponent } from "react";

import {
  Box,
} from "@components";

export type DividerProps = {};

export const Divider: FunctionComponent<DividerProps> = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "1px",
        backgroundColor: "on-background",
      }}
    />
  );
};
