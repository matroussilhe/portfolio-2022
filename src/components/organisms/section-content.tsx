import React, { FunctionComponent, useMemo } from "react";

import {
  Flex,
  SectionContentCenterParagraph,
  SectionContentLeftImageRightParagraph,
  SectionContentLeftQuoteRightParagraph,
  SectionContentSectionTitle,
  SectionContentSubsectionTitle,
  SectionContentTopImageBottomParagraph,
} from "@components";
import {
  Content,
  ContentSliceType,
} from "@services";

export type SectionContentProps = {
  contents: Content[];
};

export type ContentComponents = {
  [key in ContentSliceType]: FunctionComponent<any>;
};

export const SectionContent: FunctionComponent<SectionContentProps> = ({
  contents,
}) => {
  const contentComponents: ContentComponents = useMemo(() => {
    return {
      "section_title": SectionContentSectionTitle,
      "subsection_title": SectionContentSubsectionTitle,
      "center_paragraph": SectionContentCenterParagraph,
      "left_image_right_paragraph": SectionContentLeftImageRightParagraph,
      "top_image_bottom_paragraph": SectionContentTopImageBottomParagraph,
      "left_quote_right_paragraph": SectionContentLeftQuoteRightParagraph,
    };
  }, []);

  return (
    <Flex
      sx={{
        px: 5,
        flexDirection: "column",
        backgroundColor: "background",
      }}>
      {contents.map((content, index) => {
        if (!contentComponents[content.type]) {
          return null;
        }

        // get component by type
        const ContentComponent = contentComponents[content.type];

        return (
          <ContentComponent
            key={`section-content-${index}`}
            content={content}
          />
        );
      })}
    </Flex>
  );
};
