import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  Flex,
  FlexProps,
  Space,
  Text,
} from "@components";
import {
  SectionTitle,
} from "@services";

export type SectionContentSectionTitleProps = FlexProps & {
  ref?: Ref<HTMLDivElement>;
  content: SectionTitle;
  index: number;
};

export const SectionContentSectionTitle: FunctionComponent<SectionContentSectionTitleProps> = forwardRef<HTMLDivElement, SectionContentSectionTitleProps>(({
  content,
  index,
  ...rest
}, ref) => {
  const indexString = (index + 1).toString().padStart(2, "0");

  return (
    <Flex
      ref={ref}
      sx={{
        pt: [4, 4, 8, 10],
        pb: [4, 4, 8, 10],
      }}
      {...rest}>
      <Text
        variant={["heading5", "heading4", "heading3", "heading2"]}
        sx={{
          fontWeight: "bold",
        }}>
        {indexString}<Space/>{content.title}
      </Text>
    </Flex>
  );
});
