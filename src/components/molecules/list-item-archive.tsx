import React, { FunctionComponent } from "react";

import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Tag,
  Text,
} from "@components";
import { Archive } from "@utils";

export type ListItemArchiveProps = {
  archive: Archive;
};

export const ListItemArchive: FunctionComponent<ListItemArchiveProps> = ({
  archive,
}) => {
  return (
    <Flex
      sx={{
        mx: 1,
      }}>
      <Box
        sx={{
          width: ["col12.6"],
        }}>
        <Text
          variant={"body2"}
          sx={{
            mb: 2,
            fontWeight: "bold",
            lineHeight: 1.2,
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
          width: ["col12.3"],
        }}
      />
      <Box
        sx={{
          width: ["col12.3"],
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
        <Link
          href={archive.button.href}
          target={"_blank"}>
          <Button
            variant={"primary"}
            size={"md"}
            shape={"round"}
            sx={{
              mt: 6,
            }}>
            {archive.button.text}
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};
