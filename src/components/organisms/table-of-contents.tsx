import React, {
  createRef,
  Fragment,
  FunctionComponent,
  Ref,
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CSSTransition } from "react-transition-group";

import styled from "@emotion/styled";

import {
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

export type TableOfContentsComponent = {
  [key in ContentSliceType]: FunctionComponent<any> | (() => null);
};

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

export const TableOfContents: FunctionComponent<TableOfContentsProps> = ({
  contents,
  activeContent,
  contentRefs,
  isVisible = false,
  ...rest
}) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  // WIP:
  const [isShown2, setIsShown2] = useState<boolean>(false);
  const [activeSectionTitleIndex, setActiveSectionTitleIndex] = useState<number>();
  const [activeSubsectionTitleIndex, setActiveSubsectionTitleIndex] = useState<number>();
  // WIP:
  // const [activeSubsectionTitleValue, setActiveSubsectionTitleValue] = useState<number>();
  // const previousActiveSectionTitleIndex = usePreviousState(activeSectionTitleIndex);
  const previousActiveSubsectionTitleIndex = usePreviousState(activeSubsectionTitleIndex);

  const ref = useRef<HTMLDivElement>(null);
  const refsRef = useRef(contents.map(() => createRef<HTMLDivElement>()));

  // FIXME: hard to match/find indexes if they don't match between TOC and props.contents
  // const refsRef = useRef(contents
  //   .filter(content => content.type === "section_title" || content.type === "subsection_title")
  //   .map(() => createRef<HTMLDivElement>()));

  // find first content that matches provided type from above contents (i.e. previous in array)
  const findAboveContentIndexByType = useCallback((type: ContentSliceType, index: number) => {
    // FIXME: doesn't work with index === 0
    if (index === 0) {
      if (contents[0].type === type) {
        return 0;
      }
    }

    // FIXME: stop when type change???
    for (let i = index; i >= 0; --i) {
      if (contents[i].type === type) {
        return i;
      }
    }
  }, [contents]);

  // update active section and subsection on active content change
  useEffect(() => {
    // WIP:
    // console.log("activeContent: ", activeContent);
    // console.log("refsRef.current: ", refsRef.current);
    if (!activeContent) return;

    const aboveSectionTitleIndex = findAboveContentIndexByType("section_title", activeContent.index);
    const aboveSubsectionTitleIndex = findAboveContentIndexByType("subsection_title", activeContent.index);
    // DEBUG: good debugging
    // console.log("aboveSectionTitleIndex: ", aboveSectionTitleIndex);
    // console.log("aboveSection: ", aboveSectionTitleIndex !== undefined ? contents[aboveSectionTitleIndex]?.title : "");
    // console.log("aboveSubsectionTitleIndex: ", aboveSubsectionTitleIndex);
    // console.log("aboveSubsection: ", aboveSubsectionTitleIndex !== undefined ? contents[aboveSubsectionTitleIndex]?.title : "");
    setActiveSectionTitleIndex(aboveSectionTitleIndex);
    setActiveSubsectionTitleIndex(aboveSubsectionTitleIndex);
    // WIP:
    // console.log("useEffect aboveSectionTitleIndex: ", aboveSectionTitleIndex);
    // console.log("useEffect aboveSubsectionTitleIndex: ", aboveSubsectionTitleIndex);

    const isActiveContentSectionTitle = activeContent?.type === "section_title";
    const newIsShown = isVisible && !isActiveContentSectionTitle;

    setIsShown(newIsShown);
  }, [activeContent, findAboveContentIndexByType, isVisible]);

  // map content type to component
  const components: TableOfContentsComponent = useMemo(() => {
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

  // FIXME: move to above useEffect, mabye unmoved later
  // // trigger wrapper animation on visibility change
  // useEffect(() => {
  //   if (!activeContent) return;

  //   console.log("activeContent: ", activeContent);
  //   const isActiveContentSectionTitle = activeContent?.type === "section_title";
  //   const newIsShown = isVisible && !isActiveContentSectionTitle;

  //   setIsShown(newIsShown);
  // }, [activeContent, isVisible]);

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
          // get component by type
          const Component = components[content.type];

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

          if (isSectionTitle) {
            // only extend active section
            const isExtended = index === activeSectionTitleIndex;

            // show active section title
            return (
              <Component
                ref={refsRef.current[index]}
                key={`section-content-${index}`}
                content={content}
                sx={{
                  pb: isExtended ? `${SUBSECTION_TITLE_HEIGHT}px` : "0px",
                }}
                {...extraProps}
              />
            );
          } else if (isSubsectionTitle) {
            // FIXME: direction seems broken
            // calculate animation direction
            const direction = (activeSubsectionTitleIndex || 0) >= (previousActiveSubsectionTitleIndex || 0) ? -1 : 1;

            // WIP:
            // const isVisible = previousActiveSectionTitleIndex === activeSectionTitleIndex;

            // DEBUG: good debugging
            // console.log("activeSubsectionTitleIndex: ", activeSubsectionTitleIndex);
            // console.log("activeSubsection: ", activeSubsectionTitleIndex !== undefined ? contents[activeSubsectionTitleIndex]?.title : "");
            // const isSameSection = previousActiveSectionTitleIndex === activeSectionTitleIndex;
            // if (!isSameSection) {
            //   console.log("previousActiveSectionTitleIndex: ", previousActiveSectionTitleIndex);
            //   console.log("previousActiveSection: ", previousActiveSectionTitleIndex !== undefined ? contents[previousActiveSectionTitleIndex]?.title : "");
            //   console.log("activeSectionTitleIndex: ", activeSectionTitleIndex);
            //   console.log("activeSection: ", activeSectionTitleIndex !== undefined ? contents[activeSectionTitleIndex]?.title : "");
            //   return null;
            // }

            // const isActiveSectionTitleIndex = index === activeContent?.index;
            // const isActiveSubsectionTitleIndex = index === activeContent?.index;
            // console.log("activeSectionTitleIndex: ", activeSectionTitleIndex);
            // console.log("activeSection: ", activeSectionTitleIndex !== undefined ? contents[activeSectionTitleIndex]?.title : "");
            // console.log("activeSubsectionTitleIndex: ", activeSubsectionTitleIndex);
            // console.log("activeSubsection: ", activeSubsectionTitleIndex !== undefined ? contents[activeSubsectionTitleIndex]?.title : "");

            // // WIP: hide animation not active section or subsection
            // const newIsShown = aboveSectionTitleIndex === activeSectionTitleIndex &&
            //   aboveSubsectionTitleIndex === activeSubsectionTitleIndex;
            // if (newIsShown) {
            //   console.log("loop index: ", index);
            //   console.log("loop value: ", content.title);
            //   console.log("loop activeSectionTitleIndex: ", activeSectionTitleIndex);
            //   console.log("loop activeSubsectionTitleIndex: ", activeSubsectionTitleIndex);
            // }

            // only show/animate active subsection inside active section
            const aboveSectionTitleIndex = findAboveContentIndexByType("section_title", index);
            const aboveSubsectionTitleIndex = findAboveContentIndexByType("subsection_title", index);
            const isAboveSectionTitleIndexActiveSectionTitleIndex = aboveSectionTitleIndex === activeSectionTitleIndex;
            const isAboveSubsectionTitleIndexActiveSubsectionTitleIndex = aboveSubsectionTitleIndex === activeSubsectionTitleIndex;
            const isTransitioning = isAboveSubsectionTitleIndexActiveSubsectionTitleIndex;
            const isVisible = isAboveSectionTitleIndexActiveSectionTitleIndex;

            if (isTransitioning) {
              console.log("index: ", index);
              console.log("aboveSubsectionTitleIndex: ", aboveSubsectionTitleIndex);
              console.log("activeSubsectionTitleIndex: ", activeSubsectionTitleIndex);
            }

            const isActiveSubsectionTitle = index === activeSubsectionTitleIndex;
            const isActiveSubsectionTitleIndex = index === activeSubsectionTitleIndex;

            // show active subsection title with animation
            return (
              <CSSTransition
                key={`section-content-${index}`}
                nodeRef={refsRef.current[index]}
                // in={isActiveSubsectionTitleIndex}
                // WIP:
                in={isTransitioning}
                classNames={SUBSECTION_TITLE_TRANSITION_NAME}
                timeout={SUBSECTION_TITLE_TRANSITION_DURATION}>
                <StyledFlexSubsectionTitle
                  ref={refsRef.current[index]}
                  direction={direction}
                  sx={{
                    mt: `-${SUBSECTION_TITLE_HEIGHT}px`,
                    // FIXME: visibility breaks with CSSTransition
                    // visibility: isVisible ? "visible" : "hidden",
                    opacity: isTransitioning ? 1 : 0,
                  }}>
                  <Component
                    content={content}
                    {...extraProps}
                  />
                </StyledFlexSubsectionTitle>
              </CSSTransition>
            );
          } else {
            // show nothing (i.e. other content types render null)
            return (
              <Component
                key={`section-content-${index}`}
                content={content}
                {...extraProps}
              />
            );
          }
        })}
      </StyledFlex>
    </CSSTransition>
  );
};
