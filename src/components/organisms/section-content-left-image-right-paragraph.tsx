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
            width: ["col12.12", "col12.12", "col12.7", "col12.8"],
            pr: [null, null, 3, 3],
            pb: content.paragraph ? [4, 4, 0, 0] : 0,
          }}>
          <Flex
            sx={{
              flexDirection: "column",
            }}>
            <Image
              src={content.image}
              loading={"lazy"}
              decoding={"async"}
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
