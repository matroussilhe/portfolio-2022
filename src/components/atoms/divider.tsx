import React, { FunctionComponent } from "react";

import {
  Box,
  BoxProps,
} from "@components";

export type DividerProps = BoxProps & {};

export const Divider: FunctionComponent<DividerProps> = ({
  ...rest
}) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "1px",
        backgroundColor: "on-background",
      }}
      {...rest}
    />
  );
};
