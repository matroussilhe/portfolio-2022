import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  FlexColumnSpacer,
  Text,
} from "@components";
import {
  SubsectionTitle,
} from "@services";

export type SectionContentSubsectionTitleProps = {
  ref?: Ref<HTMLDivElement>;
  index: number;
  content: SubsectionTitle;
};

export const SectionContentSubsectionTitle: FunctionComponent<SectionContentSubsectionTitleProps> = forwardRef<HTMLDivElement, SectionContentSubsectionTitleProps>(({
  index,
  content,
}, ref) => {
  return (
    <FlexColumnSpacer
      leftColumnWidth={"col12.3"}
      centerColumnWidth={"col12.9"}>
      <Text
        ref={ref}
        variant={"heading3"}
        sx={{
          mb: 4,
        }}>
        {content.title.toUpperCase()}
      </Text>
    </FlexColumnSpacer>
  );
});
