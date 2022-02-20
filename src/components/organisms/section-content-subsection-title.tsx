import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  Flex,
  FlexColumnSpacer,
  FlexProps,
  Text,
} from "@components";
import {
  SubsectionTitle,
} from "@services";

export type SectionContentSubsectionTitleProps = FlexProps & {
  ref?: Ref<HTMLDivElement>;
  content: SubsectionTitle;
};

export const SectionContentSubsectionTitle: FunctionComponent<SectionContentSubsectionTitleProps> = forwardRef<HTMLDivElement, SectionContentSubsectionTitleProps>(({
  content,
  ...rest
}, ref) => {
  return (
    <FlexColumnSpacer
      leftColumnWidth={"col12.3"}
      centerColumnWidth={"col12.9"}>
      <Flex
        sx={{
          py: 2,
        }}
        {...rest}
      />
      <Text
        ref={ref}
        variant={"heading4"}>
        {content.title.toUpperCase()}
      </Text>
    </FlexColumnSpacer>
  );
});
