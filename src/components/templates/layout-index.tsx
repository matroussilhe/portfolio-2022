import React, { Fragment, FunctionComponent } from "react";

import {
  Header,
  SectionArchive,
  SectionFooter,
  SectionHome,
  SectionWork,
} from "@components";
import {
  Archive,
  Work,
} from "@utils";

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
      <Header
        iconColor={"on-surface"}
        workCount={works.length}
      />
      <SectionHome/>
      <SectionWork
        works={works}
      />
      <SectionArchive
        archives={archives}
      />
      <SectionFooter/>
    </Fragment>
  );
};
