import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  Box,
  Flex,
  FlexColumnSpacer,
  FlexProps,
  Image,
  Text,
  TextLegend,
} from "@components";
import {
  LeftImageRightParagraph,
} from "@services";

export type SectionContentLeftImageRightParagraphProps = FlexProps & {
  ref?: Ref<HTMLDivElement>;
  content: LeftImageRightParagraph;
};

export const SectionContentLeftImageRightParagraph: FunctionComponent<SectionContentLeftImageRightParagraphProps> = forwardRef<HTMLDivElement, SectionContentLeftImageRightParagraphProps>(({
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
          pb: [8, 8, 20, 20], // WIP: responsive
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        {...rest}>
        <Box
          sx={{
            width: ["col12.12", "col12.12", "col12.8", "col12.8"], // WIP: responsive
            pb: content.paragraph ? [4, 4, 0, 0] : 0, // WIP: responsive
          }}>
          <Flex
            sx={{
              flexDirection: "column",
            }}>
            <Image
              src={content.image}
              sx={{
                mb: 1,
              }}
            />
            <TextLegend>
              {content.legend}
            </TextLegend>
          </Flex>
        </Box>
        <Box
          sx={{
            width: ["col12.12", "col12.12", "col12.4", "col12.4"], // WIP: responsive
            pl: [null, null, 3, 3], // WIP: responsive
          }}>
          <Flex
            sx={{
              justifyContent: ["flex-start", "flex-start", "flex-end", "flex-end"],
            }}>
            <Text
              variant={["body2", "body2", "body2", "body1"]} // WIP: responsive
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
