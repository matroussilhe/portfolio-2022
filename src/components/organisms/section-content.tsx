import React, {
  createRef,
  FunctionComponent,
  RefObject,
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
  areVerticallyOverlapping,
  getTopClosestEntry,
  getVerticallyClosestEntry,
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
  const [activeContent, setActiveContent] = useState<TableOfContentsActiveContent>();

  // WIP: object type
  // FIXME: no need for toc ref, use isVisible and distance to top of screen instead?
  const tocRefsRef = useRef([createRef<HTMLDivElement>()]);
  // WIP: object type
  const targetRefsRef = useRef(contents.map((content) => {
    const ref = createRef<HTMLDivElement>();
    ref.current?.setAttribute("TYPOS", content.type);

    return ref;
  }));

  // WIP: tag refs with attributes
  useLayoutEffect(() => {
    targetRefsRef.current.forEach((targetRef, index) => {
      targetRef.current?.setAttribute("contentIndex", index.toString());
      targetRef.current?.setAttribute("contentType", contents[index].type);
    });
  }, [contents]);

  const { entries: tocEntries } = useIntersectionObserver(tocRefsRef.current);
  // TODO: tweek margin/treshold to trigger intersection more generously
  const { entries: contentEntries } = useIntersectionObserver(targetRefsRef.current);

  // on intersection, find closest entry to table of content and set it as active content
  useEffect(() => {
    const entryDifference = getTopClosestEntry(tocEntries?.[0], contentEntries);

    const DIFFERENCE_THRESHOLD = 100; // distance between top of toc and closest entry found
    // for entries entering from the top
    if (entryDifference && entryDifference.difference <= DIFFERENCE_THRESHOLD) {
      const type = entryDifference.entry.target.getAttribute("contentType") || undefined;
      const index = entryDifference.entry.target.getAttribute("contentIndex") || undefined;

      if (type && index != undefined) {
        setActiveContent({
          type: type as ContentSliceType,
          index: parseInt(index, 10),
        });
      }
    }
  }, [contentEntries, tocEntries]);

  let sectionTitleIndex = 0;

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
      <TableOfContents
        ref={tocRefsRef.current[0]}
        contents={contents}
        activeContent={activeContent}
      />
      {contents.map((content, index) => {
        // get component by type
        const ContentComponent = contentComponents[content.type];

        // get type specific props
        const extraProps: any = {};
        if (content.type === "section_title") {
          extraProps.index = sectionTitleIndex;

          // increment index for type
          sectionTitleIndex = ++sectionTitleIndex;
        }

        return (
          <ContentComponent
            key={`section-content-${index}`}
            ref={targetRefsRef.current[index]}
            content={content}
            {...extraProps}
          />
        );
      })}
    </Flex>
  );
};
