import React, { FunctionComponent } from "react";
import { Props as ReactSVGProps, ReactSVG } from "react-svg";

import { ResponsiveStyleValue } from "theme-ui";

import { Box } from "@components";
import { useResponsive } from "@hooks";
import { ThemeColor } from "@themes";

export type IconProps = ReactSVGProps & {
  src: string;
  size?: ResponsiveStyleValue<string>;
  color?: ThemeColor | string;
};

export const Icon: FunctionComponent<IconProps> = ({
  src,
  size = null,
  color = "on-background",
}) => {
  const { getResponsiveProp } = useResponsive();

  const responsiveSize = getResponsiveProp(size);

  const style = {
    color: "inherit",
    fontSize: 0,
  };

  const handleBeforeInjection = (svg: SVGSVGElement) => {
    if (!svg || !responsiveSize) return;

    svg.setAttribute("width", responsiveSize);
    svg.setAttribute("height", responsiveSize);
  };

  return (
    <Box
      sx={{
        color: color,
      }}>
      <ReactSVG
        src={src}
        style={style}
        beforeInjection={(handleBeforeInjection)}
      />
    </Box>
  );
};
