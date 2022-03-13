import React, { Fragment, FunctionComponent } from "react";

import {
  Flex,
  Navbar,
  SectionArchive,
  SectionContact,
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
        sx={{
          px: [3, 4, 5, 5],
          pt: [2, 3, 3, 3],
        }}
      />
      <Flex
        sx={{
          flexDirection: "column",
        }}>
        <SectionHome
          sx={{
            px: [3, 4, 5, 5],
            pb: [2, 3, 3, 3],
          }}
        />
        <SectionWork
          works={works}
          sx={{
            px: [3, 4, 5, 5],
            pt: [10, 10, 20, 20],
          }}
        />
        <SectionArchive
          archives={archives}
          sx={{
            px: [3, 4, 5, 5],
            pt: [10, 10, 20, 20],
            pb: [10, 10, 20, 20],
          }}
        />
        <SectionContact
          sx={{
            px: [3, 4, 5],
            pt: [7, 10, 12, 12],
            pb: [2, 3, 3, 3],
          }}
        />
      </Flex>
    </Fragment>
  );
};
