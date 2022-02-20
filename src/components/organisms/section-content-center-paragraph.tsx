import React, { forwardRef, FunctionComponent, Ref } from "react";

import {
  Box,
  Flex,
  FlexColumnSpacer,
  FlexProps,
  Text,
} from "@components";
import {
  CenterParagraph,
} from "@services";

export type SectionContentCenterParagraphProps = FlexProps & {
  ref?: Ref<HTMLDivElement>;
  content: CenterParagraph;
};

export const SectionContentCenterParagraph: FunctionComponent<SectionContentCenterParagraphProps> = forwardRef<HTMLDivElement, SectionContentCenterParagraphProps>(({
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
          pb: 20,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
        {...rest}>
        <Box
          sx={{
            width: "col12.2",
          }}
        />
        <Box
          sx={{
            width: "col12.8",
          }}>
          <Flex
            sx={{
              justifyContent: "center",
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
        <Box
          sx={{
            width: "col12.2",
          }}
        />
      </Flex>
    </FlexColumnSpacer>
  );
});
