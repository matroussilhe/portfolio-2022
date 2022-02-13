import React, {
  createRef,
  FunctionComponent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Flex,
  SectionContentCenterParagraph,
  SectionContentLeftImageRightParagraph,
  SectionContentLeftQuoteRightParagraph,
  SectionContentSectionTitle,
  SectionContentSubsectionTitle,
  SectionContentTopImageBottomParagraph,
  TableOfContents,
  TableOfContentsActiveContent,
} from "@components";
import {
  useIntersectionObserver,
} from "@hooks";
import {
  Content,
  ContentSliceType,
} from "@services";

export type SectionContentProps = {
  contents: Content[];
};

export type ContentComponents = {
  [key in ContentSliceType]: FunctionComponent<any> | (() => null);
};

export type ContentIndexes = {
  [key in ContentSliceType]: number;
};

export const SectionContent: FunctionComponent<SectionContentProps> = ({
  contents,
}) => {
  const tableOfContentsRef = useRef<HTMLDivElement>(null);
  const contentRefs = contents.map(() => createRef<HTMLDivElement>());

  const [activeContent, setActiveContent] = useState<TableOfContentsActiveContent>();

  // observe content intersection changes
  const { entries } = useIntersectionObserver(contentRefs);

  // set attributes on each content ref to provide metadata to intersection observer entries
  useLayoutEffect(() => {
    contentRefs.forEach((contentRef, index) => {
      contentRef.current?.setAttribute("contentIndex", index.toString());
      contentRef.current?.setAttribute("contentType", contents[index].type);
    });
  }, [contentRefs, contents]);

  // update active content on intersection change
  useEffect(() => {
    if (!tableOfContentsRef.current || !entries) return;

    // find entry located above table of contents (i.e. entry that started to leave screen from above)
    const { y } = tableOfContentsRef.current?.getBoundingClientRect();
    const foundEntry = entries.find((entry) => {
      return entry.boundingClientRect.y <= y;
    });
    if (!foundEntry) return;

    // get metadata from entry
    const type = foundEntry.target.getAttribute("contentType") || undefined;
    const index = foundEntry.target.getAttribute("contentIndex") || undefined;

    // set active content
    if (type && index != undefined) {
      setActiveContent({
        type: type as ContentSliceType,
        index: parseInt(index, 10),
      });
    }
  }, [entries]);

  // map content type to component
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

  // display index in front of section titles
  let sectionTitleIndex = 0;

  return (
    <Flex
      sx={{
        px: 5,
        flexDirection: "column",
        backgroundColor: "background",
      }}>
      <TableOfContents
        ref={tableOfContentsRef}
        contents={contents}
        activeContent={activeContent}
      />
      {contents.map((content, index) => {
        // get content component by type
        const ContentComponent = contentComponents[content.type];

        // get type's specific props
        const extraProps: any = {};
        if (content.type === "section_title") {
          // set index prop
          extraProps.index = sectionTitleIndex;
          sectionTitleIndex = ++sectionTitleIndex;
        }

        return (
          <ContentComponent
            key={`section-content-${index}`}
            ref={contentRefs[index]}
            content={content}
            {...extraProps}
          />
        );
      })}
    </Flex>
  );
};
