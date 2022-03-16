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
            width: ["col12.12", "col12.12", "col12.12", "col12.12"],
            pb: content.paragraph ? [4, 4, 10, 10] : undefined, // WIP: responsive
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
            width: ["col12.12", "col12.12", "col12.8", "col12.8"], // WIP: responsive
          }}>
          <Flex
            sx={{
              justifyContent: "flex-start",
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
        <Box sx={{
          width: ["col12.0", "col12.0", "col12.4", "col12.4"], // WIP: responsive
        }}
        />
      </Flex>
    </FlexColumnSpacer>
  );
});
