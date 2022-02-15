import React, {
  forwardRef,
  FunctionComponent,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  ContentComponents,
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
  contentRefs: RefObject<HTMLDivElement>[];
  isVisible?: boolean;
};

export const TableOfContents: FunctionComponent<TableOfContentsProps> = forwardRef<HTMLDivElement, TableOfContentsProps>(({
  contents,
  activeContent,
  contentRefs,
  isVisible,
}, ref) => {
  const [activeSection, setActiveSection] = useState<number>();
  const [activeSubsection, setActiveSubsection] = useState<number>();

  // find first content that matches provided type from previous contents
  const findPreviousContentIndexByType = useCallback((type: ContentSliceType, index: number) => {
    for (let i = index; i >= 0; --i) {
      if (contents[i].type === type) {
        return i;
      }
    }
  }, [contents]);

  // update active section and subsection on active content change
  useEffect(() => {
    if (!activeContent) return;

    const aboveSectionTitleIndex = findPreviousContentIndexByType("section_title", activeContent.index);
    const aboveSubectionTitleIndex = findPreviousContentIndexByType("subsection_title", activeContent.index);
    setActiveSection(aboveSectionTitleIndex);
    setActiveSubsection(aboveSubectionTitleIndex);
  }, [activeContent, findPreviousContentIndexByType]);

  // map content type to component
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

  // display index in front of section titles
  let sectionTitleIndex = 0;

  // control visibility attribute
  const isActiveContentDefined = !!activeContent;
  const isActiveContentSectionTitle = activeContent?.type === "section_title";
  const visibility = isVisible && !isActiveContentSectionTitle && isActiveContentDefined ? "visible" : "hidden";

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
        // get content component by type
        const ContentComponent = contentComponents[content.type];

        // get type's specific props
        const extraProps: any = {};
        if (content.type === "section_title") {
          // set index prop
          extraProps.index = sectionTitleIndex;
          sectionTitleIndex = ++sectionTitleIndex;

          // set isActive prop
          extraProps.isActive = index === activeSection;

          // set onClick prop
          extraProps.onClick = () => {
            if (!window) return;

            // get active and current (i.e. destination) content refs
            if (!activeContent) return;
            const activeContentRef = contentRefs[activeContent.index];
            const currentContentRef = contentRefs[index];
            if (!activeContentRef.current || !currentContentRef.current) return;

            // find position to scroll to (offset is used to trigger IntersectionObserver)
            const { top: activeTop } = activeContentRef.current.getBoundingClientRect();
            const { top: currentTop } = currentContentRef.current.getBoundingClientRect();
            const offset = 4;
            const direction = currentTop > activeTop ? 1 : -1;
            const position = currentTop + window.pageYOffset + (direction * offset);

            // scroll
            const options: ScrollToOptions = {
              top: position,
              behavior: "smooth",
            };
            window.scrollTo(options);
          };
        }

        // hide non-active subsection titles
        if (content.type === "subsection_title" && index !== activeSubsection) return null;

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
