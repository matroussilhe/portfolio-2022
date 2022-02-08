import React, { FunctionComponent } from "react";

import {
  Text,
} from "@components";
import {
  SectionTitle,
} from "@services";

export type SectionContentSectionTitleProps = {
  content: SectionTitle;
};

export const SectionContentSectionTitle: FunctionComponent<SectionContentSectionTitleProps> = ({
  content,
}) => {
  return (
    <Text
      variant={"heading1"}
      sx={{
        mb: 10,
        fontWeight: "bold",
      }}>
      {content.title}
    </Text>
  );
};
