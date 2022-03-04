import React, { Fragment, FunctionComponent, ReactNode } from "react";

import styled from "@emotion/styled";
import { variant, VariantArgs } from "styled-system";
import { ResponsiveStyleValue, ThemeUIStyleObject } from "theme-ui";

import {
  Box,
  BoxProps,
  Divider,
  Flex,
} from "@components";
import { useResponsive } from "@hooks";

export type ListGap = "sm" | "md" | "lg";

export type ListProps = {
  children: ReactNode[];
  gap?: ResponsiveStyleValue<ListGap>;
  containerSx?: ThemeUIStyleObject;
  itemSx?: ThemeUIStyleObject;
};

type StyledBoxListItemProps = BoxProps & {
  gap?: ListGap;
};

const gridItemGap = variant({
  prop: "gap",
  variants: {
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
  },
} as VariantArgs);

const StyledBoxListItem = styled(Box)<StyledBoxListItemProps>(
  gridItemGap,
);

export const List: FunctionComponent<ListProps> = ({
  gap = "md",
  containerSx,
  itemSx,
  children,
}) => {
  const getResponsiveProp = useResponsive();

  const responsiveGap = getResponsiveProp(gap);

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
          <Fragment key={`list-item-${index}`}>
            {isFirst &&
            <Divider/>
            }
            <StyledBoxListItem
              gap={responsiveGap}
              sx={{
                ...itemSx,
              }}>
              {child}
            </StyledBoxListItem>
            {!isLast &&
            <Divider/>
            }
          </Fragment>
        );
      })}
    </Flex>
  );
};
