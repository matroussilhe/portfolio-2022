import React, { Fragment, FunctionComponent } from "react";

import {
  Flex,
  Navbar,
  SectionHeader,
} from "@components";
import {
  Header,
} from "@services";

export type LayoutCaseStudyProps = {
  header: Header;
};

export const LayoutCaseStudy: FunctionComponent<LayoutCaseStudyProps> = ({
  header,
}) => {
  return (
    <Fragment>
      <Navbar
        iconColor={"on-surface"}
        workCount={4}
      />
      <Flex>
        <SectionHeader
          header={header}
        />
      </Flex>
    </Fragment>
  );
};
