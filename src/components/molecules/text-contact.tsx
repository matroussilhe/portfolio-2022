import React, { FunctionComponent } from "react";

import {
  Flex,
  Link,
  Space,
  Text,
} from "@components";

export type TextContactLink = {
  text: string;
  href: string;
};

export type TextContactProps = {
  label: string;
  links: TextContactLink[];
};

export const TextContact: FunctionComponent<TextContactProps> = ({
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
        variant={["label4", "label3", "label3", "label3"]}
        sx={{
          width: ["48px", "56px", "64px", "64px"],
          fontFamily: "body",
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
              variant={["body2", "subheading1", "heading5", "heading5"]}
              sx={{
                fontFamily: "body",
                fontWeight: "bold",
                color: "on-surface",
                lineHeight: 1,
              }}>
              {link.text}{!isLast ? "," : ""}{!isLast ? <Space/> : null}
            </Text>
          </Link>
        );
      })}
    </Flex>
  );
};
