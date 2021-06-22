import React, { FunctionComponent } from "react";

import { Button as ThemeUIButton, ButtonProps as ThemeUIButtonProps } from "theme-ui";

export type ButtonProps = ThemeUIButtonProps;

export const Button: FunctionComponent<ButtonProps> = props => <ThemeUIButton {...props}/>;
