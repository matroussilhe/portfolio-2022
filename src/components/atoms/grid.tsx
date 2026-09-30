import React, { FunctionComponent, ReactNode } from "react";

import { ResponsiveStyleValue, ThemeUIStyleObject } from "theme-ui";

import {
  Box,
  Flex,
} from "@components";
import { resolveResponsiveVariant, VariantStyleMap } from "@hooks";

export type GridGap = "sm" | "md" | "lg" | "xl";

export type GridProps = {
  children: ReactNode[];
  gap?: ResponsiveStyleValue<GridGap>;
  containerSx?: ThemeUIStyleObject;
  itemSx?: ThemeUIStyleObject;
};

const CONTAINER_GAP_VARIANTS: VariantStyleMap<GridGap> = {
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
};

const ITEM_GAP_VARIANTS: VariantStyleMap<GridGap> = {
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
};

export const Grid: FunctionComponent<GridProps> = ({
  gap = "md",
  containerSx,
  itemSx,
  children,
}) => {
  const containerGapSx = resolveResponsiveVariant(CONTAINER_GAP_VARIANTS, gap);
  const itemGapSx = resolveResponsiveVariant(ITEM_GAP_VARIANTS, gap);

  return (
    <Flex
      sx={{
        flexDirection: "row",
        flexWrap: "wrap",
        ...containerGapSx,
        ...containerSx,
      }}>
      {children?.map?.((child, index) => (
        <Box
          key={`grid-item-${index}`}
          sx={{
            ...itemGapSx,
            ...itemSx,
          }}>
          {child}
        </Box>
      ))}
    </Flex>
  );
};
