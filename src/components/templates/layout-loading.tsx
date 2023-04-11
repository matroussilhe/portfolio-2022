import React, { FunctionComponent, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import styled from "@emotion/styled";

import {
  Flex, FlexProps,
} from "@components";

export type LayoutLoadingProps = {
  loading: boolean;
};

export type StyledFlexProps = FlexProps & {};

const LOADING_TRANSITION_NAME = "loading";
const LOADING_TRANSITION_DURATION = 150;
const LOADING_TRANSITION_EASING = "cubic-bezier(0.22, 0.61, 0.36, 1);"; // easeOutCubic

const StyledFlex = styled(Flex)<StyledFlexProps>`
  opacity: 1;

  &.${LOADING_TRANSITION_NAME}-enter {
    opacity: 1;
  }
  &.${LOADING_TRANSITION_NAME}-enter-active {
    opacity: 0;
    transition: ${LOADING_TRANSITION_DURATION}ms ${LOADING_TRANSITION_EASING};
  }
  &.${LOADING_TRANSITION_NAME}-enter-done {
    opacity: 0;
  }

  &.${LOADING_TRANSITION_NAME}-exit {
    opacity: 0;
  }
  &.${LOADING_TRANSITION_NAME}-exit-active {
    opacity: 1;
    transition: ${LOADING_TRANSITION_DURATION}ms ${LOADING_TRANSITION_EASING};
  }
  &.${LOADING_TRANSITION_NAME}-exit-done {
    opacity: 1;
  }
`;

export const LayoutLoading: FunctionComponent<LayoutLoadingProps> = ({ loading = false }) => {
  const ref = useRef(null);

  // DEBUG:
  console.log("loading: ", loading);

  return (
    <CSSTransition
      nodeRef={ref}
      in={!loading}
      classNames={LOADING_TRANSITION_NAME}
      timeout={LOADING_TRANSITION_DURATION}>
      <StyledFlex
        ref={ref}
        sx={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 2, // FIXME: between buttons and background
          backgroundColor: "background",
          // DEBUG:
          alignItems: "center",
          justifyContent: "center",
          color: "red",
          fontSize: 100,
          "&.loading-enter": {
            color: "red",
          },
          "&.loading-exit": {
            color: "blue",
          },
        }}>
        {"DEBUG:"}
      </StyledFlex>
    </CSSTransition>

  );
};
