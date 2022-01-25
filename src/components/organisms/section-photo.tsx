import React, { FunctionComponent } from "react";

import {
  Flex,
} from "@components";

export type SectionPhotoProps = {};

export const SectionPhoto: FunctionComponent<SectionPhotoProps> = () => {
  return (
    <Flex
      sx={{
        width: ["col12.6"],
        height: "100vh",
        backgroundColor: "#323F94", // TODO: add color to theme
      }}
    />
  );
};
