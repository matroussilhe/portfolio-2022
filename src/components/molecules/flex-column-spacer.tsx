import React, { FunctionComponent } from "react";

import { ResponsiveStyleValue } from "theme-ui";

import {
  Box,
  Flex,
  FlexProps,
} from "@components";

export type FlexColumnSpacer = FlexProps & {
  leftColumnWidth?: ResponsiveStyleValue<string | number>;
  centerColumnWidth?: ResponsiveStyleValue<string | number>;
  rightColumnWidth?: ResponsiveStyleValue<string | number>;
};

export const FlexColumnSpacer: FunctionComponent<FlexColumnSpacer> = ({
  leftColumnWidth,
  centerColumnWidth,
  rightColumnWidth,
  children,
  ...rest
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
      }}
      {...rest}>
      <Box
        sx={{
          width: leftColumnWidth,
        }}
      />
      <Box
        sx={{
          width: centerColumnWidth,
        }}>
        {children}
      </Box>
      <Box
        sx={{
          width: rightColumnWidth,
        }}
      />
    </Flex>
  );
};
