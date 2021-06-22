import React, { FunctionComponent } from "react";

import { Text as ThemeUIText, TextProps as ThemeUITextProps } from "theme-ui";

export type TextProps = ThemeUITextProps;

export const Text: FunctionComponent<TextProps> = props => <ThemeUIText {...props}/>;
