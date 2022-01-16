import React, { Fragment, FunctionComponent } from "react";

import { Archive } from "@utils";

import {
  Divider,
  Flex,
  ListItemArchive,
} from "@components";

export type ListArchiveProps = {
  archives: Archive[];
};

export const ListArchive: FunctionComponent<ListArchiveProps> = ({
  archives,
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}>
      {archives.map((archive, index) => {
        const isFirst = index === 0;

        return (
          <Fragment key={`list-item-archive-${index}`}>
            {isFirst &&
              <Divider/>
            }
            <ListItemArchive
              archive={archive}
            />
            <Divider/>
          </Fragment>
        );
      })}
    </Flex>
  );
};
