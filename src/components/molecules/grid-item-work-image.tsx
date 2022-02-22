import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  Image,
  Link,
} from "@components";

export type GridItemWorkImageProps = {
  href: string;
  images: string[];
  color: string;
};

export const GridItemWorkImage: FunctionComponent<GridItemWorkImageProps> = ({
  href,
  images,
  color,
}) => {
  const isDoubleImage = images[0] && images[1];

  if (!isDoubleImage) {
    return (
      <Link
        href={href}>
        <Box
          sx={{
            position: "relative",
            pt: "56.25%",
          }}>
          <Flex
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: color,
            }}>
            <Image
              src={images[0]}
              sx={{
                width: "75%",
              }}
            />
          </Flex>
        </Box>
      </Link>
    );
  } else {
    return (
      <Link
        href={href}>
        <Flex
          sx={{
            flexDirection: "column",
          }}>
          <Box
            sx={{
              position: "relative",
              pt: "56.25%",
            }}>
            <Flex
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-end",
                backgroundColor: color,
              }}>
              <Image
                src={images[0]}
                sx={{
                  width: "75%",
                  mr: "6.25%",
                }}
              />
            </Flex>
          </Box>
          <Box
            sx={{
              position: "relative",
              pt: "56.25%",
            }}>
            <Flex
              sx={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                width: "100%",
                alignItems: "center",
                justifyContent: "flex-start",
                backgroundColor: color,
              }}>
              <Image
                src={images[1]}
                sx={{
                  width: "75%",
                  ml: "6.25%",
                }}
              />
            </Flex>
          </Box>
        </Flex>
      </Link>
    );
  }
};
