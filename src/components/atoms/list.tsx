import React, { Fragment, FunctionComponent, ReactNode } from "react";

import styled from "@emotion/styled";
import { variant, VariantArgs } from "styled-system";
import { FlexProps, ResponsiveStyleValue } from "theme-ui";

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
  containerProps?: FlexProps;
  itemProps?: BoxProps;
};

type StyledBoxListItemProps = BoxProps & {
  gap?: ListGap;
};

const gridItemGap = variant({
  prop: "gap",
  variants: {
    sm: {
      mt: 2,
      mb: 2,
    },
    md: {
      mt: 4,
      mb: 4,
    },
    lg: {
      mt: 8,
      mb: 8,
    },
  },
} as VariantArgs);

const StyledBoxListItem = styled(Box)<StyledBoxListItemProps>(
  gridItemGap,
);

export const List: FunctionComponent<ListProps> = ({
  children,
  gap = "md",
  containerProps,
  itemProps,
}) => {
  const getResponsiveProp = useResponsive();

  const responsiveGap = getResponsiveProp(gap);

  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}
      {...containerProps}>
      {children?.map?.((child, index) => {
        const isFirst = index === 0;

        return (
          <Fragment key={`list-item-${index}`}>
            {isFirst &&
              <Divider/>
            }
            <StyledBoxListItem
              gap={responsiveGap}
              {...itemProps}>
              {child}
            </StyledBoxListItem>
            <Divider/>
          </Fragment>
        );
      })}
    </Flex>
  );
};
