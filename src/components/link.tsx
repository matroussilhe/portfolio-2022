import React, { FunctionComponent } from "react";

import { Link as ThemeUILink, LinkProps as ThemeUILinkProps } from "theme-ui";

export type LinkProps = ThemeUILinkProps;

export const Link: FunctionComponent<LinkProps> = props => <ThemeUILink {...props}/>;
