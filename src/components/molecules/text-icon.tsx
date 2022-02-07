import React, { FunctionComponent } from "react";

import {
  Flex,
  Icon,
  Text,
  TextProps,
} from "@components";

export type TextIconProps = TextProps & {};

export const TextIcon: FunctionComponent<TextIconProps> = ({
  children,
  ...rest
}) => {
  return (
    <Flex
      sx={{
        mb: 2,
        alignItems: "flex-start",
      }}>
      <Text
        variant={"heading5"}
        sx={{
          mr: 1,
        }}
        {...rest}>
        {children}
      </Text>
      <Icon
        src={"/images/arrow.svg"}
        size={"12px"}
        color={"on-background"}
      />
    </Flex>
  );
};
