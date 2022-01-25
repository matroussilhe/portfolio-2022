import React, { Fragment, FunctionComponent } from "react";

import {
  Flex,
  Header,
  SectionInformation,
  SectionPhoto,
} from "@components";

export type LayoutAboutProps = {};

export const LayoutAbout: FunctionComponent<LayoutAboutProps> = () => {
  return (
    <Fragment>
      <Header
        iconColor={"surface"}
        workCount={4}
      />
      <Flex>
        <SectionPhoto/>
        <SectionInformation/>
      </Flex>
    </Fragment>
  );
};
