import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  Box,
  Flex,
  FlexColumnSpacer,
  Text,
} from "@components";
import {
  CenterParagraph,
} from "@services";

export type SectionContentCenterParagraphProps = {
  ref?: Ref<HTMLDivElement>;
  content: CenterParagraph;
};

export const SectionContentCenterParagraph: FunctionComponent<SectionContentCenterParagraphProps> = forwardRef<HTMLDivElement, SectionContentCenterParagraphProps>(({
  content,
}, ref) => {
  return (
    <FlexColumnSpacer
      leftColumnWidth={"col12.3"}
      centerColumnWidth={"col12.9"}>
      <Flex
        ref={ref}
        sx={{
          mb: 8,
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        <Box
          sx={{
            width: "col12.2",
          }}
        />
        <Box
          sx={{
            width: "col12.8",
          }}>
          <Text
            variant={"body1"}
            sx={{
              whiteSpace: "pre-wrap",
            }}>
            {content.paragraph}
          </Text>
        </Box>
        <Box
          sx={{
            width: "col12.2",
          }}
        />
      </Flex>
    </FlexColumnSpacer>
  );
});
