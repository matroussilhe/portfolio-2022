import React, { FunctionComponent } from "react";

import {
  Flex,
  Link,
  TextIcon,
} from "@components";
import {
  SocialItem,
} from "@services";

export type GridItemInformationLinkProps = {
  items: SocialItem[];
};

export const GridItemInformationLink: FunctionComponent<GridItemInformationLinkProps> = ({
  items,
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
      }}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <Link
            key={`grid-item-information-link-${index}`}
            href={item.link}
            target={"_blank"}>
            <TextIcon
              sx={{
                mb: isLast ? 0 : ["12px", "12px", "12px", 2],
              }}>
              {item.text}
            </TextIcon>
          </Link>
        );
      })}
    </Flex>
  );
};
