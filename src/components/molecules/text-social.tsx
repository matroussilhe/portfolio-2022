import React, { FunctionComponent } from "react";

import {
  Flex,
  Link,
  Text,
} from "@components";

export type TextSocialLink = {
  text: string;
  href: string;
};

export type TextSocialProps = {
  label: string;
  links: TextSocialLink[];
};

export const TextSocial: FunctionComponent<TextSocialProps> = ({
  label,
  links,
}) => {
  return (
    <Flex
      sx={{
        flex: "1 0 auto",
        alignItems: "baseline",
      }}>
      <Text
        variant={"label3"}
        sx={{
          width: "64px",
          fontWeight: "bold",
          color: "on-surface",
        }}>
        {label}
      </Text>
      {links.map((link, index) => {
        const isLast = index === links.length - 1;

        return (
          <Link
            key={`text-social-${index}`}
            href={link.href}
            target={"_blank"}>
            <Text
              variant={"heading4"}
              sx={{
                mr: !isLast ? 1 : 0,
                fontFamily: "body",
                fontWeight: "bold",
                color: "on-surface",
              }}>
              {link.text}{!isLast ? "," : ""}
            </Text>
          </Link>
        );
      })}
    </Flex>
  );
};
