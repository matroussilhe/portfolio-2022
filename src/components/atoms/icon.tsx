import React, { FunctionComponent } from "react";

import { ResponsiveStyleValue } from "theme-ui";

import { Box } from "@components";
import { useResponsive } from "@hooks";
import { ThemeColor } from "@themes";

export type IconName = "circle" | "arrow";

export type IconProps = {
  name: IconName;
  size?: ResponsiveStyleValue<string>;
  color?: ThemeColor | string;
};

export type IconSvgProps = {
  width?: string;
  height?: string;
};

export const ICON_SVGS: Record<IconName, FunctionComponent<IconSvgProps>> = {
  circle: ({ width = "32", height = "32" }) => (
    <svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 32 32"} width={width} height={height} fill={"currentcolor"}>
      <circle r={15} cx={16} cy={16} fill={"none"} stroke={"currentcolor"} strokeWidth={1}/>
    </svg>
  ),
  arrow: ({ width = "32", height = "32" }) => (
    <svg xmlns={"http://www.w3.org/2000/svg"} viewBox={"0 0 32 32"} width={width} height={height} fill={"currentcolor"}>
      <g transform={"translate(0.000000,32) scale(0.0500000,-0.050000)"} fill={"currentcolor"} stroke={"none"}>
        <path d={"M130 575 l0 -65 142 0 143 0 -208 -208 -207 -207 47 -48 48 -47 207 207 208 208 0 -143 0 -142 65 0 65 0 0 255 0 255 -255 0 -255 0 0 -65z"}/>
      </g>
    </svg>
  ),
};

export const Icon: FunctionComponent<IconProps> = ({
  name,
  size = null,
  color = "on-background",
}) => {
  const { getResponsiveProp } = useResponsive();

  const responsiveSize = getResponsiveProp(size);

  const IconSvg = ICON_SVGS[name];

  return (
    <Box
      sx={{
        color: color,
        lineHeight: 0,
      }}>
      <IconSvg
        width={responsiveSize ?? undefined}
        height={responsiveSize ?? undefined}
      />
    </Box>
  );
};
