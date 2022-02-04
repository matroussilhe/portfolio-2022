import React, { FunctionComponent } from "react";

import {
  Flex,
  Icon,
  Link,
  Text,
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
          <Flex
            sx={{
              mb: 1,
              alignItems: "flex-start",
            }}>
            <Text
              variant={"heading5"}
              sx={{
                mr: 1,
              }}>
              {item.text}
            </Text>
            <Icon
              src={"/images/arrow.svg"}
              size={"12px"}
              color={"on-background"}
            />
          </Flex>
        </Link>
      ))}
    </Flex>
  );
};
