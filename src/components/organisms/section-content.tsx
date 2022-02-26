import React, {
  createRef,
  FunctionComponent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  Flex,
  FlexProps,
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

export type SectionContentComponent = {
  [key in ContentSliceType]: FunctionComponent<any>;
};

export type SectionContentProps = FlexProps & {
  contents: Content[];
};

export const SectionContent: FunctionComponent<SectionContentProps> = ({
  contents,
  ...rest
}) => {
  const [activeContent, setActiveContent] = useState<TableOfContentsActiveContent>();

  const ref = useRef<HTMLDivElement>(null);
  const refsRef = useRef(contents.map(() => createRef<HTMLDivElement>()));

  // observe content intersection changes
  const { entries } = useIntersectionObserver(refsRef.current);

  // set attributes on each content ref to provide metadata to intersection observer entries
  useEffect(() => {
    refsRef.current.forEach((contentRef, index) => {
      contentRef.current?.setAttribute("contentIndex", index.toString());
      contentRef.current?.setAttribute("contentType", contents[index].type);
    });
  }, [refsRef, contents]);

  // update active content on intersection change
  useEffect(() => {
    if (!entries) return;

    // find entry that started to enter/leave viewport from above
    const foundEntry = entries.find((entry) => {
      return entry.boundingClientRect.y <= 0;
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

  // determine if component is inside viewport
  const { top, bottom } = ref.current?.getBoundingClientRect() || { top: 0, bottom: 0 };
  const isInsideViewport = top < 0 && bottom > 0;

  // map content type to component
  const components: SectionContentComponent = useMemo(() => {
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
      ref={ref}
      sx={{
        flexDirection: "column",
        backgroundColor: "background",
      }}
      {...rest}>
      <TableOfContents
        contents={contents}
        activeContent={activeContent}
        contentRefs={refsRef.current}
        isVisible={isInsideViewport}
      />
      {contents.map((content, index) => {
        // get component by type
        const Component = components[content.type];

        // get type's specific props
        const extraProps: any = {};
        if (content.type === "section_title") {
          // set index prop
          extraProps.index = sectionTitleIndex;
          sectionTitleIndex = ++sectionTitleIndex;
        }

        return (
          <Component
            ref={refsRef.current[index]}
            key={`section-content-${index}`}
            content={content}
            {...extraProps}
          />
        );
      })}
    </Flex>
  );
};
