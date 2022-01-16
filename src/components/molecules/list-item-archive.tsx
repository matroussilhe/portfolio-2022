import React, { FunctionComponent } from "react";

import {
  Flex,
  Text,
} from "@components";

export type ListItemArchiveProps = {
  archive: any;
};

export const ListItemArchive: FunctionComponent<ListItemArchiveProps> = ({
  archive,
}) => {
  return (
    <Flex>
      <Text>
        {archive.title}
      </Text>
      <Text>
        {archive.description}
      </Text>
    </Flex>
  );
};
