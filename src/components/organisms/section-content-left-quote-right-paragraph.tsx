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
      // WIP: responsive
      leftColumnWidth={["col12.0", "col12.0", "col12.3", "col12.3"]}
      centerColumnWidth={["col12.12", "col12.12", "col12.9", "col12.9"]}>
      <Flex
        ref={ref}
        sx={{
          pt: [0, 0, 0, 0],
          pb: [8, 20, 20, 20], // WIP: responsive
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        {...rest}>
        <Box
          sx={{
            width: ["col12.12", "col12.12", "col12.4", "col12.4"], // WIP: responsive
            pb: content.paragraph ? [4, 4, 0, 0] : 0, // WIP: responsive
          }}>
          <Flex
            sx={{
              justifyContent: "flex-start",
            }}>
            <Text
              variant={["subheading1", "heading5", "heading5", "heading5"]} // WIP: responsive
              sx={{
                maxWidth: "paragraph.md",
                whiteSpace: "pre-wrap",
                lineHeight: 1.3,
              }}>
              {content.quote}
            </Text>
          </Flex>
        </Box>
        <Box
          sx={{
            width: ["col12.0", "col12.0", "col12.2", "col12.2"], // WIP: responsive
          }}
        />
        <Box
          sx={{
            width: ["col12.12", "col12.12", "col12.6", "col12.6"], // WIP: responsive
          }}>
          <Flex
            sx={{
              justifyContent: "flex-end",
            }}>
            <Text
              variant={["body2", "body2", "body2", "body1"]} // WIP: responsive
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
