import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  Box,
  Flex,
  FlexColumnSpacer,
  Text,
} from "@components";
import {
  LeftQuoteRightParagraph,
} from "@services";

export type SectionContentLeftQuoteRightParagraphProps = {
  ref?: Ref<HTMLDivElement>;
  content: LeftQuoteRightParagraph;
};

export const SectionContentLeftQuoteRightParagraph: FunctionComponent<SectionContentLeftQuoteRightParagraphProps> = forwardRef<HTMLDivElement, SectionContentLeftQuoteRightParagraphProps>(({
  content,
}, ref) => {
  return (
    <FlexColumnSpacer
      leftColumnWidth={"col12.3"}
      centerColumnWidth={"col12.9"}>
      <Flex
        ref={ref}
        sx={{
          py: 4,
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        <Box
          sx={{
            width: "col12.4",
          }}>
          <Text
            variant={"heading3"}
            sx={{
              whiteSpace: "pre-wrap",
            }}>
            {content.quote}
          </Text>
        </Box>
        <Box
          sx={{
            width: "col12.2",
          }}
        />
        <Box
          sx={{
            width: "col12.6",
          }}>
          <Text
            variant={"body1"}
            sx={{
              whiteSpace: "pre-wrap",
            }}>
            {content.paragraph}
          </Text>
        </Box>
      </Flex>
    </FlexColumnSpacer>
  );
});
