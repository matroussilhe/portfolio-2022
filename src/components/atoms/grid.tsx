import React, { FunctionComponent, ReactNode } from "react";

import styled from "@emotion/styled";
import { variant, VariantArgs } from "styled-system";
import { ResponsiveStyleValue, ThemeUIStyleObject } from "theme-ui";

import {
  Box,
  BoxProps,
  Flex,
  FlexProps,
} from "@components";
import { useResponsive } from "@hooks";

export type GridGap = "sm" | "md" | "lg" | "xl";

export type GridProps = {
  children: ReactNode[];
  gap?: ResponsiveStyleValue<GridGap>;
  containerSx?: ThemeUIStyleObject;
  itemSx?: ThemeUIStyleObject;
};

type StyledFlexGridContainerProps = FlexProps & {
  gap?: GridGap;
};

type StyledBoxListItemProps = BoxProps & {
  gap?: GridGap;
};

const gridGap = variant({
  prop: "gap",
  variants: {
    sm: {
      mt: "-4px",
      mb: "-4px",
      ml: "-4px",
      mr: "-4px",
    },
    md: {
      mt: "-8px",
      mb: "-8px",
      ml: "-8px",
      mr: "-8px",
    },
    lg: {
      mt: "-12px",
      mb: "-12px",
      ml: "-12px",
      mr: "-12px",
    },
    xl: {
      mt: "-24px",
      mb: "-24px",
      ml: "-24px",
      mr: "-24px",
    },
  },
} as VariantArgs);

const StyledFlexGridContainer = styled(Flex)<StyledFlexGridContainerProps>(
  gridGap,
);

const gridItemGap = variant({
  prop: "gap",
  variants: {
    sm: {
      pt: "4px",
      pb: "4px",
      pl: "4px",
      pr: "4px",
    },
    md: {
      pt: "8px",
      pb: "8px",
      pl: "8px",
      pr: "8px",
    },
    lg: {
      pt: "12px",
      pb: "12px",
      pl: "12px",
      pr: "12px",
    },
    xl: {
      pt: "24px",
      pb: "24px",
      pl: "24px",
      pr: "24px",
    },
  },
} as VariantArgs);

const StyledBoxListItem = styled(Box)<StyledBoxListItemProps>(
  gridItemGap,
);

export const Grid: FunctionComponent<GridProps> = ({
  gap = "md",
  containerSx,
  itemSx,
  children,
}) => {
  const getResponsiveProp = useResponsive();

  const responsiveGap = getResponsiveProp(gap);

  return (
    <StyledFlexGridContainer
      gap={responsiveGap}
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
        ...containerSx,
      }}>
      {children?.map?.((child, index) => (
        <StyledBoxListItem
          key={`grid-item-${index}`}
          gap={responsiveGap}
          sx={{
            ...itemSx,
          }}>
          {child}
        </StyledBoxListItem>
      ))}
    </StyledFlexGridContainer>
  );
};
