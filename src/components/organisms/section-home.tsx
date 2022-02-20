import React, { FunctionComponent } from "react";

import {
  Flex,
  FlexProps,
  SectionHomeFooter,
  SectionHomeIntroduction,
} from "@components";

export type SectionHomeProps = FlexProps & {};

export const SectionHome: FunctionComponent<SectionHomeProps> = ({
  ...rest
}) => {
  return (
    <Flex
      sx={{
        height: "100vh",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "surface",
      }}
      {...rest}>
      <SectionHomeIntroduction
        sx={{
          px: 6,
        }}
      />
      <SectionHomeFooter
        sx={{
          pb: 3,
          px: 6,
        }}
      />
    </Flex>
  );
};
