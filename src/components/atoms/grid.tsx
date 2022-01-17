import React, { FunctionComponent, ReactNode } from "react";

import styled from "@emotion/styled";
import { variant, VariantArgs } from "styled-system";
import { ResponsiveStyleValue } from "theme-ui";

import {
  Flex,
  FlexProps,
} from "@components";
import { useResponsive } from "@hooks";

export type GridGap = "sm" | "md" | "lg";

export type GridProps = {
  children: ReactNode[];
  gap?: ResponsiveStyleValue<GridGap>;
};

export type StyledFlexGridProps = FlexProps & {
  gap?: GridGap;
};

export type StyledFlexGridItemProps = FlexProps & {
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
  },
} as VariantArgs);

const StyledFlexGrid = styled(Flex)<StyledFlexGridProps>(
  gridGap,
);

const gridItemGap = variant({
  prop: "gap",
  variants: {
    sm: {
      mt: "4px",
      mb: "4px",
      ml: "4px",
      mr: "4px",
    },
    md: {
      mt: "8px",
      mb: "8px",
      ml: "8px",
      mr: "8px",
    },
    lg: {
      mt: "12px",
      mb: "12px",
      ml: "12px",
      mr: "12px",
    },
  },
} as VariantArgs);

const StyledFlexGridItem = styled(Flex)<StyledFlexGridItemProps>(
  gridItemGap,
);

export const Grid: FunctionComponent<GridProps> = ({
  gap = "md",
  children,
}) => {
  const getResponsiveProp = useResponsive();

  const responsiveGap = getResponsiveProp(gap);

  return (
    <StyledFlexGrid
      gap={responsiveGap}>
      {children?.map?.((child, index) => (
        <StyledFlexGridItem
          key={`grid-item-${index}`}
          gap={responsiveGap}>
          {child}
        </StyledFlexGridItem>
      ))}
    </StyledFlexGrid>
  );
};
