import React, { FunctionComponent } from "react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as ThemeUILink, LinkProps as ThemeUILinkProps } from "theme-ui";

import { getBaseVariant } from "@hooks";

export type LinkVariant = "regular" | "discreet";

export type LinkProps = NextLinkProps & ThemeUILinkProps;

export const Link: FunctionComponent<LinkProps> = ({
  variant = "regular",
  href,
  ...rest
}) => {
  return (
    <NextLink
      href={href}
      passHref>
      <ThemeUILink
        variant={getBaseVariant(variant)}
        {...rest}
      />
    </NextLink>
  );
};
