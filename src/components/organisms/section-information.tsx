import React, { FunctionComponent } from "react";

import {
  Flex,
} from "@components";

export type SectionInformationProps = {};

export const SectionInformation: FunctionComponent<SectionInformationProps> = () => {
  return (
    <Flex
      sx={{
        width: ["col12.6"],
        height: "100%",
        backgroundColor: "background",
      }}
    />
  );
};
