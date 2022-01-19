import React, { FunctionComponent } from "react";

import {
  Flex,
  Text,
} from "@components";

export type SectionFooterProps = {};

export const SectionFooter: FunctionComponent<SectionFooterProps> = () => {
  return (
    <Flex
      sx={{
        height: "50vh",
        backgroundColor: "background",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <Text variant={"heading1"}>
        {"FOOTER"}
      </Text>
    </Flex>
  );
};
