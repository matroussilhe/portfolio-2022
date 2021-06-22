import React, { FunctionComponent } from "react";

import { Box as ThemeUIBox, BoxProps as ThemeUIBoxProps } from "theme-ui";

export type BoxProps = ThemeUIBoxProps;

export const Box: FunctionComponent<BoxProps> = props => <ThemeUIBox {...props}/>;
