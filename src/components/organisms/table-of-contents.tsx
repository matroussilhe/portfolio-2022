import React, {
  forwardRef,
  FunctionComponent,
  Ref,
  useMemo,
} from "react";

import {
  ContentComponents,
  ContentIndexes,
  Flex,
  TableOfContentsSectionTitle,
  TableOfContentsSubsectionTitle,
} from "@components";
import {
  Content,
} from "@services";

export type TableOfContentsProps = {
  ref?: Ref<HTMLDivElement>;
  contents: Content[];
};

export const TableOfContents: FunctionComponent<TableOfContentsProps> = forwardRef<HTMLDivElement, TableOfContentsProps>(({
  contents,
}, ref) => {
  const contentIndexes: ContentIndexes = {
    "section_title": 0,
    "subsection_title": 0,
    "center_paragraph": 0,
    "left_image_right_paragraph": 0,
    "top_image_bottom_paragraph": 0,
    "left_quote_right_paragraph": 0,
  };

  const contentComponents: ContentComponents = useMemo(() => {
    return {
      "section_title": TableOfContentsSectionTitle,
      "subsection_title": TableOfContentsSubsectionTitle,
      "center_paragraph": () => null,
      "left_image_right_paragraph": () => null,
      "top_image_bottom_paragraph": () => null,
      "left_quote_right_paragraph": () => null,
    };
  }, []);

  return (
    <Flex
      ref={ref}
      sx={{
        position: "fixed",
        top: 1,
        left: 1,
        flexDirection: "column",
      }}>
      {contents.map((content, index) => {
        // get current index by type
        const contentIndex = contentIndexes[content.type];

        // increment index by type
        contentIndexes[content.type] = ++contentIndexes[content.type];

        // get component by type
        const ContentComponent = contentComponents[content.type];

        return (
          <ContentComponent
            key={`section-content-${index}`}
            index={contentIndex}
            content={content}
          />
        );
      })}
    </Flex>
  );
});
