import React, { Fragment, FunctionComponent, ReactNode } from "react";

import { ResponsiveStyleValue, ThemeUIStyleObject } from "theme-ui";

import {
  Box,
  Divider,
  Flex,
} from "@components";
import { getResponsiveSx, VariantStyleMap } from "@services";

export type ListGap = "sm" | "md" | "lg";

export type ListProps = {
  children: ReactNode[];
  gap?: ResponsiveStyleValue<ListGap>;
  containerSx?: ThemeUIStyleObject;
  itemSx?: ThemeUIStyleObject;
};

const GAP_VARIANTS: VariantStyleMap<ListGap> = {
  sm: {
    mt: "24px",
    mb: "24px",
  },
  md: {
    mt: "32px",
    mb: "32px",
  },
  lg: {
    mt: "40px",
    mb: "40px",
  },
};

export const List: FunctionComponent<ListProps> = ({
  gap = "md",
  containerSx,
  itemSx,
  children,
}) => {
  const gapSx = getResponsiveSx(GAP_VARIANTS, gap);

  return (
    <Flex
      sx={{
        flexDirection: "column",
        ...containerSx,
      }}>
      {children?.map?.((child, index) => {
        const isFirst = index === 0;
        const isLast = index === children.length - 1;

        return (
          <Fragment
            key={`list-item-${index}`}>
            {isFirst &&
            <Divider/>
            }
            <Box
              sx={{
                ...gapSx,
                ...itemSx,
              }}>
              {child}
            </Box>
            {!isLast &&
            <Divider/>
            }
          </Fragment>
        );
      })}
    </Flex>
  );
};
