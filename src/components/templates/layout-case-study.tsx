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
          px: [3, 4, 5, 5],
          pt: [2, 3, 3, 3],
        }}
      />
      <Flex
        sx={{
          flexDirection: "column",
        }}>
        <SectionHeader
          header={header}
          sx={{
            pt: [20, 20, 25, 25],
            pb: 10, // TODO: use section_title.pt as pb
          }}
        />
        <SectionContent
          contents={contents}
          sx={{
            px: [3, 4, 5, 5],
          }}
        />
        <SectionFooter
          footer={footer}
          sx={{
            mt: [-12, -5, 0, 5], // TODO: change to pt and change value to be contant pb - content.mb
            pb: [8, 15, 20, 25],
          }}
        />
      </Flex>
    </Fragment>
  );
};
