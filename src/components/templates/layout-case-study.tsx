import React, { Fragment, FunctionComponent } from "react";

import {
  Flex,
  Navbar,
  SectionFooter,
  SectionHeader,
} from "@components";
import {
  Footer,
  Header,
} from "@services";

export type LayoutCaseStudyProps = {
  header: Header;
  footer: Footer;
};

export const LayoutCaseStudy: FunctionComponent<LayoutCaseStudyProps> = ({
  header,
  footer,
}) => {
  return (
    <Fragment>
      <Navbar
        iconColor={"on-surface"}
        workCount={4}
        showBack={true}
      />
      <Flex
        sx={{
          flexDirection: "column",
        }}>
        <SectionHeader
          header={header}
        />
        <SectionFooter
          footer={footer}
        />
      </Flex>
    </Fragment>
  );
};
