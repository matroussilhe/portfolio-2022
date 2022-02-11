import React, { FunctionComponent } from "react";

import {
  Flex,
  Text,
} from "@components";
import {
  SectionTitle,
} from "@services";

export type TableOfContentsSectionTitleProps = {
  index: number;
  content: SectionTitle;
};

export const TableOfContentsSectionTitle: FunctionComponent<TableOfContentsSectionTitleProps> = ({
  index,
  content,
}) => {
  const indexString = (index + 1).toString().padStart(2, "0");

  return (
    <Flex
      sx={{
        mb: 1,
        alignItems: "center",
      }}>
      <Text
        variant={"body1"}
        sx={{
          fontWeight: "bold",
        }}>
        {indexString}
      </Text>
      <Text
        variant={"body1"}>
        &nbsp;{"-"}&nbsp;
      </Text>
      <Text
        variant={"body1"}>
        {content.title}
      </Text>
    </Flex>
  );
};
