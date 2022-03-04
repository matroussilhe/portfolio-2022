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
        backgroundColor: "surface",
      }}
      {...rest}>
      <Flex
        sx={{
          flex: "0 0 auto",
          height: "100px",
        }}
      />
      <Flex
        sx={{
          flex: "1 0 auto",
          alignItems: "center",
        }}>
        <SectionHomeIntroduction/>
      </Flex>
      <Flex
        sx={{
          flex: "0 0 auto",
          height: "100px",
        }}>
        <SectionHomeFooter/>
      </Flex>
    </Flex>
  );
};
