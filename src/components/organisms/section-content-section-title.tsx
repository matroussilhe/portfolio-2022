import React, { FunctionComponent } from "react";

import {
  Text,
} from "@components";
import {
  SectionTitle,
} from "@services";

export type SectionContentSectionTitleProps = {
  index: number;
  content: SectionTitle;
};

export const SectionContentSectionTitle: FunctionComponent<SectionContentSectionTitleProps> = ({
  index,
  content,
}) => {
  const indexString = (index + 1).toString().padStart(2, "0");

  return (
    <Text
      variant={"heading1"}
      sx={{
        mb: 10,
        fontWeight: "bold",
      }}>
      {indexString}&nbsp;{content.title}
    </Text>
  );
};
