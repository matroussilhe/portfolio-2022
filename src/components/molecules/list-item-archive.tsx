import React, { FunctionComponent } from "react";

import { Archive } from "@utils";

import {
  Box,
  Flex,
  Grid,
  Tag,
  Text,
} from "@components";

export type ListItemArchiveProps = {
  archive: Archive;
};

export const ListItemArchive: FunctionComponent<ListItemArchiveProps> = ({
  archive,
}) => {
  return (
    <Flex>
      <Box
        sx={{
          width: ["col12.8"],
        }}>
        <Text
          variant={"body2"}
          sx={{
            mb: 2,
            fontWeight: "bold",
          }}>
          {archive.title}
        </Text>
        <Text
          variant={"body3"}
          sx={{
            whiteSpace: "pre-wrap",
            lineHeight: 1.2,
          }}>
          {archive.description}
        </Text>
      </Box>
      <Box
        sx={{
          width: ["col12.4"],
        }}>
        <Grid
          gap={"sm"}>
          {archive.tags.map((tag, index) => (
            <Tag
              key={`list-item-archive-tag-${index}`}
              size={"md"}>
              {tag}
            </Tag>
          ))}
        </Grid>
      </Box>
    </Flex>
  );
};
