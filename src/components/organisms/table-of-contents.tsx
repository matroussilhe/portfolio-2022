import React, {
  forwardRef,
  FunctionComponent,
  Ref,
  useCallback,
  useEffect,
  useMemo,
  useState,
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
  ContentSliceType,
} from "@services";

export type TableOfContentsActiveContent = {
  type: ContentSliceType;
  index: number;
};

export type TableOfContentsProps = {
  ref?: Ref<HTMLDivElement>;
  contents: Content[];
  activeContent?: TableOfContentsActiveContent;
};

export const TableOfContents: FunctionComponent<TableOfContentsProps> = forwardRef<HTMLDivElement, TableOfContentsProps>(({
  contents,
  activeContent,
}, ref) => {
  let sectionTitleIndex = 0;

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

  console.log("activeContent: ", activeContent);
  const visibility = activeContent && activeContent.type !== "section_title" ? "visible" : "hidden";
  // console.log("visibility: ", visibility);

  const [activeSection, setActiveSection] = useState<number>();
  const [activeSubsection, setActiveSubsection] = useState<number>();

  const getAboveContentIndexByType = useCallback((type: ContentSliceType, index: number) => {
    for (let i = index; i >= 0; --i) {
      if (contents[i].type === type) {
        return i;
      }
    }
  }, [contents]);

  useEffect(() => {
    if (!activeContent) return;
    const aboveSectionTitleIndex = getAboveContentIndexByType("section_title", activeContent.index);
    const aboveSubectionTitleIndex = getAboveContentIndexByType("subsection_title", activeContent.index);

    setActiveSection(aboveSectionTitleIndex);
    setActiveSubsection(aboveSubectionTitleIndex);
  }, [activeContent, getAboveContentIndexByType]);

  return (
    <Flex
      ref={ref}
      sx={{
        position: "fixed",
        top: 5,
        left: 5,
        flexDirection: "column",
        visibility,
      }}>
      {contents.map((content, index) => {
        // get component by type
        const ContentComponent = contentComponents[content.type];

        // get type specific props
        const extraProps: any = {};
        if (content.type === "section_title") {
          // set isActive prop
          extraProps.isActive = activeSection === index;

          // set index prop
          extraProps.index = sectionTitleIndex;
          sectionTitleIndex = ++sectionTitleIndex;
        }

        // hide non active subsections
        if (content.type === "subsection_title" && activeSubsection !== index) return null;

        return (
          <ContentComponent
            key={`section-content-${index}`}
            content={content}
            {...extraProps}
          />
        );
      })}
    </Flex>
  );
});
