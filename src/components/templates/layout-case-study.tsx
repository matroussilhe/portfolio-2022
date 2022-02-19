import React, { Fragment, FunctionComponent } from "react";

import {
  Flex,
  Navbar,
  SectionContent,
  SectionFooter,
  SectionHeader,
} from "@components";
import {
  Content,
  Footer,
  generateId,
  Header,
} from "@services";

export type LayoutCaseStudyProps = {
  header: Header;
  contents: Content[];
  footer: Footer;
};

export const LayoutCaseStudy: FunctionComponent<LayoutCaseStudyProps> = ({
  header,
  contents,
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
        <SectionContent
          // WIP: fix toc state not reinitialized
          key={generateId()}
          contents={contents}
        />
        <SectionFooter
          footer={footer}
        />
      </Flex>
    </Fragment>
  );
};
