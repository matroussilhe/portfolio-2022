import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  FlexColumnSpacer,
  Text,
} from "@components";
import {
  CenterParagraph,
} from "@services";

export type SectionContentCenterParagraphProps = {
  content: CenterParagraph;
};

export const SectionContentCenterParagraph: FunctionComponent<SectionContentCenterParagraphProps> = ({
  content,
}) => {
  return (
    <FlexColumnSpacer
      leftColumnWidth={"col12.3"}
      centerColumnWidth={"col12.9"}>
      <Flex
        sx={{
          mb: 8,
          flexDirection: "row",
          flexWrap: "wrap",
        }}>
        <Box
          sx={{
            width: "col12.2",
          }}
        />
        <Box
          sx={{
            width: "col12.8",
          }}>
          <Text
            variant={"body1"}
            sx={{
              whiteSpace: "pre-wrap",
            }}>
            {content.paragraph}
          </Text>
        </Box>
        <Box
          sx={{
            width: "col12.2",
          }}
        />
      </Flex>
    </FlexColumnSpacer>
  );
};
