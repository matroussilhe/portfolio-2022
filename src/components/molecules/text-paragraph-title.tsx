import React, { FunctionComponent } from "react";

import {
  Text,
  TextProps,
} from "@components";

export type TextParagraphTitleProps = TextProps & {};

export const TextParagraphTitle: FunctionComponent<TextParagraphTitleProps> = ({
  children,
  ...rest
}) => {
  return (
    <Text
      variant={"body2"}
      sx={{
        fontWeight: "black",
        lineHeight: 1,
      }}
      {...rest}>
      {children}
    </Text>
  );
};
