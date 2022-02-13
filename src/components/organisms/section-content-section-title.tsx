import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  Text,
} from "@components";
import {
  SectionTitle,
} from "@services";

export type SectionContentSectionTitleProps = {
  ref?: Ref<HTMLDivElement>;
  content: SectionTitle;
  index: number;
};

export const SectionContentSectionTitle: FunctionComponent<SectionContentSectionTitleProps> = forwardRef<HTMLDivElement, SectionContentSectionTitleProps>(({
  content,
  index,
}, ref) => {
  const indexString = (index + 1).toString().padStart(2, "0");

  return (
    <Text
      ref={ref}
      variant={"heading1"}
      sx={{
        mb: 10,
        fontWeight: "bold",
      }}>
      {indexString}&nbsp;{content.title}
    </Text>
  );
});
