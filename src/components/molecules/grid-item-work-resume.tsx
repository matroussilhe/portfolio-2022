import React, { Fragment, FunctionComponent } from "react";

import {
  Box,
  Flex,
  Grid,
  Responsive,
  Tag,
  Text,
} from "@components";

export type GridItemWorkResumeProps = {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
};

export const GridItemWorkResume: FunctionComponent<GridItemWorkResumeProps> = ({
  title,
  subtitle,
  date,
  tags,
}) => {
  return (
    <Fragment>
      <Responsive lgAndDown>
        <Flex
          sx={{
            pt: 2,
            flexDirection: "column",
          }}>
          <Flex
            sx={{
              mb: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Text
              variant={"body1"}
              sx={{
                lineHeight: 1,
                fontWeight: "bold",
              }}>
              {title}
            </Text>
            <Text
              variant={"label1"}
              sx={{
                lineHeight: 1,
              }}>
              {date}
            </Text>
          </Flex>
          <Text
            variant={"body2"}
            sx={{
              mb: 1,
              lineHeight: 1,
            }}>
            {subtitle}
          </Text>
          <Grid
            gap={"sm"}>
            {tags.map((tag, index) => (
              <Tag
                key={`grid-item-work-tag-${index}`}
                size={"sm"}>
                {tag}
              </Tag>
            ))}
          </Grid>
        </Flex>
      </Responsive>
      <Responsive xlOnly>
        <Flex
          sx={{
            pt: 3,
            flexDirection: "column",
          }}>
          <Flex
            sx={{
              mb: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Text
              variant={"subheading2"}
              sx={{
                lineHeight: 1,
                fontWeight: "bold",
              }}>
              {title}
            </Text>
            <Text
              variant={"label1"}
              sx={{
                lineHeight: 1,
              }}>
              {date}
            </Text>
          </Flex>
          <Flex
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <Text
              variant={"body1"}
              sx={{
                lineHeight: 1,
              }}>
              {subtitle}
            </Text>
            <Grid
              gap={"sm"}>
              {tags.map((tag, index) => (
                <Tag
                  key={`grid-item-work-tag-${index}`}
                  size={"md"}>
                  {tag}
                </Tag>
              ))}
            </Grid>
          </Flex>
        </Flex>
      </Responsive>
    </Fragment>
  );
};
