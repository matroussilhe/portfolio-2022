import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  Box,
  Flex,
  FlexColumnSpacer,
  Image,
  Text,
  TextLegend,
} from "@components";
import {
  LeftImageRightParagraph,
} from "@services";

export type SectionContentLeftImageRightParagraphProps = {
  ref?: Ref<HTMLDivElement>;
  content: LeftImageRightParagraph;
};

export const SectionContentLeftImageRightParagraph: FunctionComponent<SectionContentLeftImageRightParagraphProps> = forwardRef<HTMLDivElement, SectionContentLeftImageRightParagraphProps>(({
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
