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
      leftColumnWidth={["col12.0", "col12.0", "col12.3", "col12.3"]}
      centerColumnWidth={["col12.12", "col12.12", "col12.9", "col12.9"]}>
      <Flex
        ref={ref}
        sx={{
          pt: [0, 0, 0, 0],
          pb: [8, 8, 10, 20],
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        {...rest}>
        <Box
          sx={{
            width: ["col12.12", "col12.12", "col12.5", "col12.4"],
            pb: content.paragraph ? [4, 4, 0, 0] : 0,
          }}>
          <Flex
            sx={{
              justifyContent: "flex-start",
            }}>
            <Text
              variant={["subheading1", "heading6", "heading6", "heading5"]}
              sx={{
                maxWidth: ["paragraph.sm", "paragraph.sm", "paragraph.sm", "paragraph.md"],
                whiteSpace: "pre-wrap",
                lineHeight: 1.3,
              }}>
              {content.quote}
            </Text>
          </Flex>
        </Box>
        <Box
          sx={{
            width: ["col12.0", "col12.0", "col12.2", "col12.4"],
          }}
        />
        <Box
          sx={{
            width: ["col12.12", "col12.12", "col12.5", "col12.4"],
          }}>
          <Flex
            sx={{
              justifyContent: ["flex-start", "flex-start", "flex-end", "flex-end"],
            }}>
            <Text
              variant={["body2", "body2", "body2", "body1"]}
              sx={{
                maxWidth: ["paragraph.sm", "paragraph.sm", "paragraph.sm", "paragraph.md"],
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
