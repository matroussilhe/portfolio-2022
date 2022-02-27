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
            width: "col12.8",
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
            width: "col12.4",
            pl: 3,
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
