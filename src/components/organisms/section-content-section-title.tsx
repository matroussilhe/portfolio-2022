import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  Flex,
  FlexProps,
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
      sx={{
        py: 5,
      }}
      {...rest}>
      <Text
        ref={ref}
        variant={"heading1"}
        sx={{
          fontWeight: "bold",
        }}>
        {indexString}&nbsp;{content.title}
      </Text>
    </Flex>
  );
});
