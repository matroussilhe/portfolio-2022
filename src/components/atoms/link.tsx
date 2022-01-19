import React, { FunctionComponent } from "react";

import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { Link as ThemeUILink, LinkProps as ThemeUILinkProps } from "theme-ui";

export type LinkProps = NextLinkProps & ThemeUILinkProps;

export const Link: FunctionComponent<LinkProps> = ({
  href,
  ...rest
}) => {
  return (
    <NextLink href={href} passHref>
      <ThemeUILink {...rest}/>
    </NextLink>
  );
};
