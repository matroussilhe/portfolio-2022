import React, { Fragment, FunctionComponent } from "react";

import {
  Box,
  Flex,
  Grid,
  Icon,
  Link,
  Responsive,
  Tag,
  Text,
} from "@components";
import { Archive } from "@services";

export type ListItemArchiveProps = {
  archive: Archive;
};

export const ListItemArchive: FunctionComponent<ListItemArchiveProps> = ({
  archive,
}) => {
  return (
    <Fragment>
      <Responsive mdAndDown>
        <Flex
          sx={{
            flexWrap: "wrap",
          }}>
          <Box
            sx={{
              width: ["col12.3", "col12.2"],
            }}>
            <Text
              variant={"body1"}
              sx={{
                lineHeight: 1,
                fontWeight: "bold",
              }}>
              {archive.date}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.6", "col12.7"],
            }}>
            <Text
              variant={"body1"}
              sx={{
                lineHeight: 1,
                fontWeight: "bold",
              }}>
              {archive.title}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.3", "col12.3"],
            }}>
            {archive.link &&
            <Flex
              sx={{
                justifyContent: "flex-end",
              }}>
              <Link
                href={archive.link}
                target={"_blank"}>
                <Icon
                  src={"/images/arrow.svg"}
                  size={"16px"}
                  color={"on-background"}
                />
              </Link>
            </Flex>
            }
          </Box>
          <Box
            sx={{
              mt: [2, 2],
              width: ["col12.12", "col12.12"],
            }}>
            <Flex
              sx={{
                justifyContent: "flex-start",
              }}>
              <Text
                variant={"body3"}
                sx={{
                  maxWidth: "paragraph.sm",
                  whiteSpace: "pre-wrap",
                }}>
                {archive.description}
              </Text>
            </Flex>
          </Box>
          <Box
            sx={{
              mt: [2, 2],
              width: ["col12.12", "col12.12"],
            }}>
            <Grid
              gap={"sm"}>
              {archive.tags.map((tag, index) => (
                <Tag
                  key={`list-item-archive-tag-${index}`}
                  size={"sm"}>
                  {tag}
                </Tag>
              ))}
            </Grid>
          </Box>
        </Flex>
      </Responsive>
      <Responsive lgAndUp>
        <Flex>
          <Box
            sx={{
              width: ["col12.1"],
            }}>
            <Text
              variant={"subheading2"}
              sx={{
                fontWeight: "bold",
              }}>
              {archive.date}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.2"],
            }}>
            <Text
              variant={"subheading2"}
              sx={{
                fontWeight: "bold",
              }}>
              {archive.title}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.6"],
              pr: 3,
            }}>
            <Flex>
              <Text
                variant={"body3"}
                sx={{
                  maxWidth: "paragraph.sm",
                  whiteSpace: "pre-wrap",
                }}>
                {archive.description}
              </Text>
            </Flex>
          </Box>
          <Box
            sx={{
              width: ["col12.3"],
              pr: 3,
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
          <Box
            sx={{
              width: "16px",
            }}>
            {archive.link &&
            <Flex
              sx={{
                justifyContent: "flex-end",
              }}>
              <Link
                href={archive.link}
                target={"_blank"}>
                <Icon
                  src={"/images/arrow.svg"}
                  size={"16px"}
                  color={"on-background"}
                />
              </Link>
            </Flex>
            }
          </Box>
        </Flex>
      </Responsive>
    </Fragment>
  );
};
