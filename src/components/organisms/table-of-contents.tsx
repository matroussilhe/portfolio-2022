import React, {
  forwardRef,
  FunctionComponent,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { CSSTransition } from "react-transition-group";

import styled from "@emotion/styled";

import {
  ContentComponents,
  Flex,
  FlexProps,
  TableOfContentsSectionTitle,
  TableOfContentsSubsectionTitle,
} from "@components";
import {
  Content,
  ContentSliceType,
} from "@services";

const TRANSITION_NAME = "slide-fade";
const TRANSITION_DURATION = 250;
const TRANSITION_EASING = "cubic-bezier(0.4, 0.0, 0.2, 1)";

export type TableOfContentsActiveContent = {
  type: ContentSliceType;
  index: number;
};

export type TableOfContentsProps = FlexProps & {
  ref?: Ref<HTMLDivElement>;
  contents: Content[];
  activeContent?: TableOfContentsActiveContent;
  contentRefs: RefObject<HTMLDivElement>[];
  isVisible?: boolean;
};

export type StyledFlexProps = FlexProps & {};

const StyledFlex = styled(Flex)<StyledFlexProps>`
  opacity: 0;

  &.${TRANSITION_NAME}-enter {
    opacity: 0;
    transform: translateY(-100%);
  }
  
  &.${TRANSITION_NAME}-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: ${TRANSITION_DURATION}ms ${TRANSITION_EASING};
  }

  &.${TRANSITION_NAME}-enter-done {
    opacity: 1;
  }  
  
  &.${TRANSITION_NAME}-exit {
    opacity: 1;
    transform: translateY(0%);
  }
  
  &.${TRANSITION_NAME}-exit-active {
    opacity: 0;
    transform: translateY(-100%);
    transition: ${TRANSITION_DURATION}ms ${TRANSITION_EASING};
  }
  
  &.${TRANSITION_NAME}-exit-done {
    opacity: 0;
  }  
`;

export const TableOfContents: FunctionComponent<TableOfContentsProps> = forwardRef<HTMLDivElement, TableOfContentsProps>(({
  contents,
  activeContent,
  contentRefs,
  isVisible = false,
  ...rest
}, ref) => {
  const [isShown, setIsShown] = useState<boolean>(false);
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

  // trigger animation on visibility change
  useEffect(() => {
    const isActiveContentDefined = !!activeContent;
    const isActiveContentSectionTitle = activeContent?.type === "section_title";
    const newIsShown = isVisible && !isActiveContentSectionTitle && isActiveContentDefined;

    setIsShown(newIsShown);
  }, [activeContent, isVisible]);

  return (
    <CSSTransition
      nodeRef={ref}
      in={isShown}
      classNames={TRANSITION_NAME}
      timeout={TRANSITION_DURATION}>
      <StyledFlex
        ref={ref}
        sx={{
          position: "fixed",
          top: 5,
          left: 5,
          flexDirection: "column",
        }}
        {...rest}>
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
      </StyledFlex>
    </CSSTransition>
  );
});
