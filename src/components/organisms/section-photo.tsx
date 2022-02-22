import React, { FunctionComponent } from "react";

import {
  Flex, FlexProps,
} from "@components";
import {
  getRandomInteger,
} from "@services";

export type SectionPhotoProps = FlexProps & {};

export const SectionPhoto: FunctionComponent<SectionPhotoProps> = ({
  ...rest
}) => {
  // get random background color
  const backgroundColors = [
    "red-700",
    "green-700",
    "blue-700",
  ];
  const index = getRandomInteger(0, backgroundColors.length - 1);
  const backgroundColor = backgroundColors[index];

  return (
    <Flex
      sx={{
        height: "100%",
        backgroundColor,
      }}
      {...rest}
    />
  );
};
