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
      leftColumnWidth={["col12.0", "col12.0", "col12.3", "col12.3"]}
      centerColumnWidth={["col12.12", "col12.12", "col12.9", "col12.9"]}>
      <Flex
        ref={ref}
        sx={{
          pt: [2, 2, 4, 5],
          pb: [4, 4, 4, 5],
        }}
        {...rest}>
        <Text
          variant={["subheading2", "subheading1", "heading6", "heading5"]}>
          {content.title.toUpperCase()}
        </Text>
      </Flex>
    </FlexColumnSpacer>
  );
});
