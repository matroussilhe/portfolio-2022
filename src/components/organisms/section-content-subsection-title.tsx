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
        ref={ref}
        sx={{
          pt: 5,
          pb: 5,
        }}
        {...rest}>
        <Text
          variant={"heading5"}>
          {content.title.toUpperCase()}
        </Text>
      </Flex>
    </FlexColumnSpacer>
  );
});
