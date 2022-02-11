import React, { FunctionComponent } from "react";

import {
  FlexColumnSpacer,
  Text,
} from "@components";
import {
  SubsectionTitle,
} from "@services";

export type SectionContentSubsectionTitleProps = {
  index: number;
  content: SubsectionTitle;
};

export const SectionContentSubsectionTitle: FunctionComponent<SectionContentSubsectionTitleProps> = ({
  index,
  content,
}) => {
  return (
    <FlexColumnSpacer
      leftColumnWidth={"col12.3"}
      centerColumnWidth={"col12.9"}>
      <Text
        variant={"heading3"}
        sx={{
          mb: 4,
        }}>
        {content.title.toUpperCase()}
      </Text>
    </FlexColumnSpacer>
  );
};
