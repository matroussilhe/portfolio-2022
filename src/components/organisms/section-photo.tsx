import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  FlexProps,
  Image,
} from "@components";
import {
  getRandomInteger,
  Photo,
} from "@services";

export type SectionPhotoProps = FlexProps & {
  photo: Photo;
};

export const SectionPhoto: FunctionComponent<SectionPhotoProps> = ({
  photo,
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
        flexWrap: "wrap",
      }}
      {...rest}>
      {/* DEBUG: photos test rendering */}
      {photo.images.map((image, index) => {
        return (
          <Box
            key={`section-photo-image-${index}`}>
            <Image
              src={image}
              sx={{
                width: "300px",
                height: "auto",
              }}
            />
          </Box>
        );
      })}
    </Flex>
  );
};
