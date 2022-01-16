import React, { FunctionComponent } from "react";

import {
  Flex,
  ListItemArchive,
} from "@components";

export type ListArchiveProps = {
  archives: any[];
};

export const ListArchive: FunctionComponent<ListArchiveProps> = ({
  archives,
}) => {
  return (
    <Flex>
      {archives.map((archive, index) => {
        const isFirst = index === 0;
        const isLast = index === archives.length - 1;

        // TODO: render diviers
        return (
          <ListItemArchive key={`list-item-archive-${index}`} archive={archive}/>
        );
      })}
    </Flex>
  );
};
