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
        workCount={works.length}
      />
      <SectionHome/>
      <SectionWork
        title={"Selected Work"}
        works={works}
      />
      <SectionArchive
        title={"Archive"}
        archives={archives}
      />
      <SectionFooter/>
    </Fragment>
  );
};
