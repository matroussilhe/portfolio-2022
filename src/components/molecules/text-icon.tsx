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
        alignItems: "flex-start",
      }}>
      <Text
        variant={"subheading1"}
        sx={{
          mr: 1,
          lineHeight: 1,
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
