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
            width: ["col12.0", "col12.0", "col12.2", "col12.2"],
          }}
        />
        <Box
          sx={{
            width: ["col12.12", "col12.12", "col12.8", "col12.8"],
          }}>
          <Flex
            sx={{
              justifyContent: "center",
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
        <Box
          sx={{
            width: ["col12.0", "col12.0", "col12.2", "col12.2"],
          }}
        />
      </Flex>
    </FlexColumnSpacer>
  );
});
