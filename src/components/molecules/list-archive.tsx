import React, { FunctionComponent } from "react";

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
          <>
            {isFirst &&
              <Divider/>
            }
            <ListItemArchive key={`list-item-archive-${index}`} archive={archive}/>
            <Divider/>
          </>
        );
      })}
    </Flex>
  );
};
