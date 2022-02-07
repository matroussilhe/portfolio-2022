import React, { Fragment, FunctionComponent } from "react";

import {
  Flex,
  Navbar,
  SectionArchive,
  SectionHome,
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
        workCount={works.length}
      />
      <Flex
        sx={{
          flexDirection: "column",
        }}>
        <SectionHome/>
        <SectionWork
          works={works}
        />
        <SectionArchive
          archives={archives}
        />
      </Flex>
    </Fragment>
  );
};
