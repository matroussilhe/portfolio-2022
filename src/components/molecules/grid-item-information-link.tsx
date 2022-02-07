import React, { FunctionComponent } from "react";

import {
  Flex,
  Link,
  TextIcon,
} from "@components";
import {
  Social,
} from "@services";

export type GridItemInformationLinkProps = {
  items: Social;
};

export const GridItemInformationLink: FunctionComponent<GridItemInformationLinkProps> = ({
  items,
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}>
      {items.map((item, index) => (
        <Link
          key={`grid-item-information-link-${index}`}
          href={item.link}
          target={"_blank"}>
          <TextIcon>
            {item.text}
          </TextIcon>
        </Link>
      ))}
    </Flex>
  );
};
