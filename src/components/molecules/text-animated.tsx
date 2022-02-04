import React, { FunctionComponent } from "react";

import {
  Text,
} from "@components";

export type TextAnimatedProps = {};

export const TextAnimated: FunctionComponent<TextAnimatedProps> = ({
  children,
}) => {
  return (
    <Text
      variant={"heading4"}
      sx={{
        lineHeight: 1.2,
        color: "on-surface",
      }}>
      {children}
    </Text>
  );
};
