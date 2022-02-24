import React, {
  createRef,
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
  usePreviousState,
} from "@hooks";
import {
  Content,
  ContentSliceType,
} from "@services";

const TABLE_OF_CONTENTS_TRANSITION_NAME = "table-of-content-slide";
const TABLE_OF_CONTENTS_TRANSITION_DURATION = 250;
const TABLE_OF_CONTENTS_TRANSITION_EASING = "cubic-bezier(0.4, 0.0, 0.2, 1)";

const SUBSECTION_TITLE_TRANSITION_NAME = "subsection-title-slide";
const SUBSECTION_TITLE_TRANSITION_DURATION = 250;
const SUBSECTION_TITLE_TRANSITION_EASING = "cubic-bezier(0.4, 0.0, 0.2, 1)";

const SUBSECTION_TITLE_HEIGHT = 32;

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

export type StyledFlexSectionTitleProps = FlexProps & {};

const StyledFlex = styled(Flex)<StyledFlexSectionTitleProps>`
  opacity: 0;

  &.${TABLE_OF_CONTENTS_TRANSITION_NAME}-enter {
    opacity: 0;
    transform: translateY(-100%);
  }
  &.${TABLE_OF_CONTENTS_TRANSITION_NAME}-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: ${TABLE_OF_CONTENTS_TRANSITION_DURATION}ms ${TABLE_OF_CONTENTS_TRANSITION_EASING};
  }
  &.${TABLE_OF_CONTENTS_TRANSITION_NAME}-enter-done {
    opacity: 1;
    transform: translateY(0%);
  }

  &.${TABLE_OF_CONTENTS_TRANSITION_NAME}-exit {
    opacity: 1;
    transform: translateY(0%);
  }
  &.${TABLE_OF_CONTENTS_TRANSITION_NAME}-exit-active {
    opacity: 0;
    transform: translateY(-100%);
    transition: ${TABLE_OF_CONTENTS_TRANSITION_DURATION - 50}ms ${TABLE_OF_CONTENTS_TRANSITION_EASING};
  }
  &.${TABLE_OF_CONTENTS_TRANSITION_NAME}-exit-done {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export type StyledFlexSubsectionTitleProps = FlexProps & {
  direction: 1 | -1;
};

const StyledFlexSubsectionTitle = styled(Flex)<StyledFlexSubsectionTitleProps>`
  opacity: 0;

  &.${SUBSECTION_TITLE_TRANSITION_NAME}-enter {
    opacity: 0;
    transform: translateY(${props => props.direction * -50}%);
  }
  &.${SUBSECTION_TITLE_TRANSITION_NAME}-enter-active {
    opacity: 1;
    transform: translateY(0%);
    transition: ${SUBSECTION_TITLE_TRANSITION_DURATION}ms ${SUBSECTION_TITLE_TRANSITION_EASING};
  }
  &.${SUBSECTION_TITLE_TRANSITION_NAME}-enter-done {
    opacity: 1;
    transform: translateY(0%);
  }

  &.${SUBSECTION_TITLE_TRANSITION_NAME}-exit {
    opacity: 1;
    transform: translateY(0%);
  }
  &.${SUBSECTION_TITLE_TRANSITION_NAME}-exit-active {
    opacity: 0;
    transform: translateY(${props => props.direction * 50}%);
    transition: ${SUBSECTION_TITLE_TRANSITION_DURATION - 50}ms ${SUBSECTION_TITLE_TRANSITION_EASING};
  }
  &.${SUBSECTION_TITLE_TRANSITION_NAME}-exit-done {
    opacity: 0;
    transform: translateY(${props => props.direction * 50}%);
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
  const [activeSectionTitleIndex, setActiveSectionTitleIndex] = useState<number>();
  const [activeSubsectionTitleIndex, setActiveSubsectionTitleIndex] = useState<number>();
  const previousActiveSubsectionTitleIndex = usePreviousState(activeSubsectionTitleIndex);

  const refs = contents.map(() => createRef<HTMLDivElement>());

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
    setActiveSectionTitleIndex(aboveSectionTitleIndex);
    setActiveSubsectionTitleIndex(aboveSubectionTitleIndex);
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
      classNames={TABLE_OF_CONTENTS_TRANSITION_NAME}
      timeout={TABLE_OF_CONTENTS_TRANSITION_DURATION}>
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
            extraProps.isActive = index === activeSectionTitleIndex;

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

          // get render conditions
          const isSectionTitle = content.type === "section_title";
          const isSubsectionTitle = content.type === "subsection_title";
          const isActiveSectionTitleIndex = index === activeSectionTitleIndex;
          const isActiveSubsectionTitleIndex = index === activeSubsectionTitleIndex;

          if (isSectionTitle) {
            // show active section title
            return (
              <ContentComponent
                key={`section-content-${index}`}
                content={content}
                sx={{
                  pb: isActiveSectionTitleIndex ? `${SUBSECTION_TITLE_HEIGHT}px` : "0px",
                }}
                {...extraProps}
              />
            );
          } else if (isSubsectionTitle) {
            // calculate animation direction
            const direction = (activeSubsectionTitleIndex || 0) >= (previousActiveSubsectionTitleIndex || 0) ? -1 : 1;

            // show active subsection title with animation
            return (
              <CSSTransition
                key={`section-content-${index}`}
                nodeRef={refs[index]}
                in={isActiveSubsectionTitleIndex}
                classNames={SUBSECTION_TITLE_TRANSITION_NAME}
                timeout={SUBSECTION_TITLE_TRANSITION_DURATION}>
                <StyledFlexSubsectionTitle
                  ref={refs[index]}
                  direction={direction}
                  sx={{
                    mt: `-${SUBSECTION_TITLE_HEIGHT}px`,
                  }}>
                  <ContentComponent
                    content={content}
                    {...extraProps}
                  />
                </StyledFlexSubsectionTitle>
              </CSSTransition>
            );
          } else {
            // show nothing (i.e. other content types render null)
            <ContentComponent
              key={`section-content-${index}`}
              content={content}
              {...extraProps}
            />;
          }
        })}
      </StyledFlex>
    </CSSTransition>
  );
});
