import React, { FunctionComponent } from "react";

import {
  Flex,
  Icon,
  Text,
} from "@components";

export type TextIconProps = {};

export const TextIcon: FunctionComponent<TextIconProps> = ({
  children,
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
        }}>
        {children}
      </Text>
      <Icon
        src={"/images/arrow.svg"}
        size={"14px"}
        color={"on-background"}
      />
    </Flex>
  );
};
