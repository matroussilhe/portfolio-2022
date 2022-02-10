import React, { FunctionComponent } from "react";

import {
  Text,
} from "@components";
import {
  SubsectionTitle,
} from "@services";

export type SectionContentSubsectionTitleProps = {
  content: SubsectionTitle;
};

export const SectionContentSubsectionTitle: FunctionComponent<SectionContentSubsectionTitleProps> = ({
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
