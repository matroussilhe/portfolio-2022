import React, { FunctionComponent } from "react";

import { useColorMode } from "theme-ui";

import {
  Box,
  Icon,
} from "@components";

export type IconThemeProps = {};

export const IconTheme: FunctionComponent<IconThemeProps> = () => {
  const [colorMode, setColorMode] = useColorMode();

  const handleClick = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        cursor: "pointer",
      }}>
      <Icon
        src={"/images/circle.svg"}
        size={"20px"}
        color={"on-surface"}
      />
    </Box>
  );
};
