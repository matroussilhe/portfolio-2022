import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  Text,
  TextProps,
} from "@components";

export type TextLegendProps = TextProps & {};

export const TextLegend: FunctionComponent<TextLegendProps> = ({
  children,
  ...rest
}) => {
  return (
    <Flex
      sx={{
        alignItems: "center",
      }}>
      <Box
        sx={{
          width: "2px",
          height: "16px",
          mr: 1,
          backgroundColor: "grayscale-300", // TODO: handle dark theme
        }}
      />
      <Text
        variant={"label1"}
        sx={{
          mt: "2px",
          fontFamily: "body",
        }}
        {...rest}>
        {children}
      </Text>
    </Flex>
  );
};
