import React, { FunctionComponent } from "react";

import {
  Text,
} from "@components";
import {
  SubsectionTitle,
} from "@services";

export type TableOfContentsSubsectionTitleProps = {
  content: SubsectionTitle;
};

export const TableOfContentsSubsectionTitle: FunctionComponent<TableOfContentsSubsectionTitleProps> = ({
  content,
}) => {
  return (
    <Text
      variant={"body1"}
      sx={{
        ml: 5,
        mb: 1,
      }}>
      {content.title}
    </Text>
  );
};
