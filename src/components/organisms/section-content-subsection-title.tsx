import React, { FunctionComponent } from "react";

import {
  FlexColumnSpacer,
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
    <FlexColumnSpacer
      leftColumnWidth={"col12.3"}
      centerColumnWidth={"col12.9"}>
      <Text
        variant={"heading3"}
        sx={{
          mb: 4,
        }}>
        {content.title}
      </Text>
    </FlexColumnSpacer>
  );
};
