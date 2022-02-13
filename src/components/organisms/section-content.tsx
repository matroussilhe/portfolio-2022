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
} from "@components";
import {
  areVerticallyOverlapping,
  getVerticallyClosestEntry,
  useIntersectionObserver, useOnScreen,
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
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);
  // WIP: object type
  const tocRefsRef = useRef([createRef<HTMLDivElement>()]);

  // WIP: object type
  const targetRefsRef = useRef(contents.map(() => createRef<HTMLDivElement>()));

  // TODO: remove entries return if calculations are made in hooks not here
  // TODO: other option is to make englobe/touch calculation here and use hook just to get entries
  // TODO: other option is call intersectionObserver hook both for element and targets then compare their intersections rectangles (if better than page postion, not sure)
  const { entries: tocEntries } = useIntersectionObserver(tocRefsRef.current);
  // console.log("tocEntries: ", tocEntries);

  const { entries: contentEntries } = useIntersectionObserver(targetRefsRef.current, { root: containerRef.current });
  // const { entries: contentEntries } = useIntersectionObserver(targetRefsRef.current);
  console.log("contentEntries: ", contentEntries);

  const overlappings = contentEntries?.filter((contentEntry: IntersectionObserverEntry) => {
    return areVerticallyOverlapping(tocEntries?.[0], contentEntry);
  });
  // console.log("overlappings: ", overlappings);

  const verticallyClosestEntry = getVerticallyClosestEntry(tocEntries?.[0], contentEntries);
  console.log("verticallyClosestEntry: ", verticallyClosestEntry);

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
      />
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
            ref={targetRefsRef.current[index]}
            index={contentIndex}
            content={content}
          />
        );
      })}
    </Flex>
  );
};
