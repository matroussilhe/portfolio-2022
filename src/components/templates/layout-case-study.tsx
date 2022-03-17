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
            pt: [20, 20, 25, 25], // WIP: responsive
            // TODO: use section_title.pt as pb (or use same space as above title)
            pb: [8, 8, 10, 10], // WIP: responsive
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
            // TODO: change to pt and change value to be contant pb - content.mb
            pt: [4, 4, 0, 5], // WIP: responsive
            pb: [12, 12, 20, 25], // WIP: responsive
          }}
        />
      </Flex>
    </Fragment>
  );
};
