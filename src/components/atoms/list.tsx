import React, { Fragment, FunctionComponent, ReactNode } from "react";

import styled from "@emotion/styled";
import { variant, VariantArgs } from "styled-system";
import { ResponsiveStyleValue } from "theme-ui";

import {
  Divider,
  Flex,
  FlexProps,
} from "@components";
import { useResponsive } from "@hooks";

export type ListGap = "sm" | "md" | "lg";

export type ListProps = {
  children: ReactNode[];
  gap?: ResponsiveStyleValue<ListGap>;
};

export type StyledFlexListItemProps = FlexProps & {
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

const StyledFlexListItem = styled(Flex)<StyledFlexListItemProps>(
  gridItemGap,
);

export const List: FunctionComponent<ListProps> = ({
  gap = "md",
  children,
}) => {
  const getResponsiveProp = useResponsive();

  const responsiveGap = getResponsiveProp(gap);

  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}>
      {children?.map?.((child, index) => {
        const isFirst = index === 0;

        return (
          <Fragment key={`list-item-${index}`}>
            {isFirst &&
              <Divider/>
            }
            <StyledFlexListItem
              gap={responsiveGap}>
              {child}
            </StyledFlexListItem>
            <Divider/>
          </Fragment>
        );
      })}
    </Flex>
  );
};
