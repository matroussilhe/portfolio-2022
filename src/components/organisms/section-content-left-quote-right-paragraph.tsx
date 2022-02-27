import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  Box,
  Flex,
  FlexColumnSpacer,
  FlexProps,
  Text,
} from "@components";
import {
  LeftQuoteRightParagraph,
} from "@services";

export type SectionContentLeftQuoteRightParagraphProps = FlexProps & {
  ref?: Ref<HTMLDivElement>;
  content: LeftQuoteRightParagraph;
};

export const SectionContentLeftQuoteRightParagraph: FunctionComponent<SectionContentLeftQuoteRightParagraphProps> = forwardRef<HTMLDivElement, SectionContentLeftQuoteRightParagraphProps>(({
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
          pt: 0,
          pb: 20,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        {...rest}>
        <Box
          sx={{
            width: "col12.4",
          }}>
          <Flex
            sx={{
              justifyContent: "flex-start",
            }}>
            <Text
              variant={"heading4"}
              sx={{
                maxWidth: "paragraph.md",
                whiteSpace: "pre-wrap",
              }}>
              {content.quote}
            </Text>
          </Flex>
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
          <Flex
            sx={{
              justifyContent: "flex-end",
            }}>
            <Text
              variant={"body1"}
              sx={{
                maxWidth: "paragraph.md",
                whiteSpace: "pre-wrap",
              }}>
              {content.paragraph}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </FlexColumnSpacer>
  );
});
