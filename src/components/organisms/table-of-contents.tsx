import React, {
  createRef,
  FunctionComponent,
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

export type StyledFlexSubsectionTitleProps = FlexProps & {};

const StyledFlexSubsectionTitle = styled(Flex)<StyledFlexSubsectionTitleProps>`
  opacity: 0;

  &.${SUBSECTION_TITLE_TRANSITION_NAME}-enter {
    opacity: 0;
    transform: translateY(-50%);
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
    transform: translateY(50%);
    transition: ${SUBSECTION_TITLE_TRANSITION_DURATION - 50}ms ${SUBSECTION_TITLE_TRANSITION_EASING};
  }
  &.${SUBSECTION_TITLE_TRANSITION_NAME}-exit-done {
    opacity: 0;
    transform: translateY(50%);
  }
`;

export const TableOfContents: FunctionComponent<TableOfContentsProps> = ({
  contents,
  activeContent,
  contentRefs,
  isVisible = false,
  ...rest
}) => {
  const [isIn, setIsIn] = useState<boolean>(false);
  const [activeSectionTitleIndex, setActiveSectionTitleIndex] = useState<number>();
  const [activeSubsectionTitleIndex, setActiveSubsectionTitleIndex] = useState<number>();

  const ref = useRef<HTMLDivElement>(null);
  const refsRef = useRef(contents.map(() => createRef<HTMLDivElement>()));

  // find first content that matches provided type from above contents
  const findAboveContentIndexByType = useCallback((index: number, typeToFind: ContentSliceType, typeToStop?: ContentSliceType) => {
    for (let i = index; i >= 0; --i) {
      const { type } = contents[i];

      if (typeToStop && type === typeToStop) {
        return undefined;
      } else if (type === typeToFind) {
        return i;
      }
    }

    return undefined;
  }, [contents]);

  // trigger table of contents animation on active content or visibility change
  useEffect(() => {
    if (!activeContent) return;

    const isActiveContentSectionTitle = activeContent?.type === "section_title";
    const newIsIn = isVisible && !isActiveContentSectionTitle;

    setIsIn(newIsIn);
  }, [activeContent, isVisible]);

  // update active section and subsection on active content change
  useEffect(() => {
    if (!activeContent) return;

    const aboveSectionTitleIndex = findAboveContentIndexByType(activeContent.index, "section_title");
    const aboveSubsectionTitleIndex = findAboveContentIndexByType(activeContent.index, "subsection_title", "section_title");
    setActiveSectionTitleIndex(aboveSectionTitleIndex);
    setActiveSubsectionTitleIndex(aboveSubsectionTitleIndex);
  }, [activeContent, findAboveContentIndexByType]);

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

  return (
    <CSSTransition
      nodeRef={ref}
      in={isIn}
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
              const { top: currentTop } = currentContentRef.current.getBoundingClientRect();
              const offset = 4;
              const position = currentTop + window.pageYOffset + offset;

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
            // trigger subsection title animation
            const isIn = index === activeSubsectionTitleIndex;

            // hide animations for subsections not in active section
            const currentAboveSectionTitleIndex = findAboveContentIndexByType(index, "section_title");
            const isVisible = currentAboveSectionTitleIndex === activeSectionTitleIndex;

            // show active subsection title with animation
            return (
              <CSSTransition
                key={`section-content-${index}`}
                nodeRef={refsRef.current[index]}
                in={isIn}
                classNames={SUBSECTION_TITLE_TRANSITION_NAME}
                timeout={SUBSECTION_TITLE_TRANSITION_DURATION}>
                <StyledFlexSubsectionTitle
                  ref={refsRef.current[index]}
                  sx={{
                    mt: `-${SUBSECTION_TITLE_HEIGHT}px`,
                    visibility: isVisible ? "visible" : "hidden",
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
