import React, { Fragment, FunctionComponent } from "react";

import {
  Flex,
  Navbar,
  SectionArchive,
  SectionHome,
  SectionHomeFooter,
  SectionWork,
} from "@components";
import {
  Archive,
  Work,
} from "@services";

export type LayoutIndexProps = {
  works: Work[];
  archives: Archive[];
};

export const LayoutIndex: FunctionComponent<LayoutIndexProps> = ({
  works,
  archives,
}) => {
  return (
    <Fragment>
      <Navbar
        iconColor={"on-surface"}
        sx={{
          pt: 3,
          px: 6,
        }}
      />
      <Flex
        sx={{
          flexDirection: "column",
        }}>
        <SectionHome/>
        <SectionWork
          works={works}
          sx={{
            px: [6],
            pt: [20],
            zIndex: 1,
          }}
        />
        <SectionArchive
          archives={archives}
          sx={{
            px: [6],
            pt: [20],
            pb: [20],
            zIndex: 1,
          }}
        />
        <SectionHomeFooter
          sx={{
            pt: 18,
            pb: 3,
            px: 6,
          }}
        />
      </Flex>
    </Fragment>
  );
};
