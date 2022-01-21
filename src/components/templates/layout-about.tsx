import React, { Fragment, FunctionComponent } from "react";

import {
  Flex,
  Header,
  Text,
} from "@components";

export type LayoutAboutProps = {};

export const LayoutAbout: FunctionComponent<LayoutAboutProps> = () => {
  return (
    <Fragment>
      <Header
        workCount={4}
      />
      <Flex
        sx={{
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text>
          {"about"}
        </Text>
      </Flex>
    </Fragment>
  );
};
