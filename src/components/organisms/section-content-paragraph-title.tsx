import React, { FunctionComponent } from "react";

import {
  Text,
} from "@components";
import {
  ParagraphTitle,
} from "@services";

export type SectionContentParagraphTitleProps = {
  content: ParagraphTitle;
};

export const SectionContentParagraphTitle: FunctionComponent<SectionContentParagraphTitleProps> = ({
  content,
}) => {
  return (
    <Text
      variant={"heading3"}
      sx={{
        mb: 4,
      }}>
      {content.title}
    </Text>
  );
};
