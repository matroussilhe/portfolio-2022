import React, { FunctionComponent } from "react";

import { Image as ThemeUIImage, ImageProps as ThemeUIImageProps } from "theme-ui";

export type ImageProps = ThemeUIImageProps;

export const Image: FunctionComponent<ImageProps> = props => <ThemeUIImage {...props}/>;
