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
      variant={"heading3"}
      sx={{
        color: "on-surface",
        lineHeight: 1.2,
      }}>
      {children}
    </Text>
  );
};
