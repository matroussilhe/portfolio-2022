import React, { FunctionComponent } from "react";

import {
  Flex,
  Text,
} from "@components";

export type TextSectionTitleProps = {
  title: string;
  subtitle: string;
};

export const TextSectionTitle: FunctionComponent<TextSectionTitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Flex
      sx={{
        alignItems: "flex-start",
      }}>
      <Text
        variant={"heading3"}
        sx={{
          mr: 1,
          fontWeight: "bold",
        }}>
        {title}
      </Text>
      <Text
        variant={"label1"}>
        {subtitle}
      </Text>
    </Flex>
  );
};
