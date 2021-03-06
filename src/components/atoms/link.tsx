import React, { FunctionComponent } from "react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as ThemeUILink, LinkProps as ThemeUILinkProps } from "theme-ui";

import { useResponsive } from "@hooks";

export type LinkVariant = "regular" | "discreet";

export type LinkProps = NextLinkProps & ThemeUILinkProps;

export const Link: FunctionComponent<LinkProps> = ({
  variant = "regular",
  href,
  ...rest
}) => {
  const { getResponsiveProp } = useResponsive();

  const responsiveVariant = getResponsiveProp(variant);

  return (
    <NextLink
      href={href}
      passHref>
      <ThemeUILink
        variant={responsiveVariant}
        {...rest}
      />
    </NextLink>
  );
};
