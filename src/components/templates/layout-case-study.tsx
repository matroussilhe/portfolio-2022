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
        iconColor={"on-background"}
        showBack={true}
        sx={{
          pt: 3,
          px: 6,
        }}
      />
      <Flex
        sx={{
          flexDirection: "column",
        }}>
        <SectionHeader
          header={header}
          sx={{
            pt: 25,
            pb: 10,
          }}
        />
        <SectionContent
          contents={contents}
          sx={{
            px: 5,
          }}
        />
        <SectionFooter
          footer={footer}
          sx={{
            pt: 5,
            pb: 25,
          }}
        />
      </Flex>
    </Fragment>
  );
};
