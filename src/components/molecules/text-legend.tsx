import React, { FunctionComponent } from "react";

import { useColorMode } from "theme-ui";

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
  const [colorMode] = useColorMode();

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
          backgroundColor: colorMode === "light" ? "grayscale-300" : "grayscale-500",
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
