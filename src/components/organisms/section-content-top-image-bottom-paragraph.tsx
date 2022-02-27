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
  TopImageBottomParagraph,
} from "@services";

export type SectionContentTopImageBottomParagraphProps = FlexProps & {
  ref?: Ref<HTMLDivElement>;
  content: TopImageBottomParagraph;
};

export const SectionContentTopImageBottomParagraph: FunctionComponent<SectionContentTopImageBottomParagraphProps> = forwardRef<HTMLDivElement, SectionContentTopImageBottomParagraphProps>(({
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
            width: "col12.12",
            pb: 10,
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
            width: "col12.8",
          }}>
          <Flex
            sx={{
              justifyContent: "flex-start",
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
        <Box sx={{
          width: "col12.4",
        }}
        />
      </Flex>
    </FlexColumnSpacer>
  );
});
