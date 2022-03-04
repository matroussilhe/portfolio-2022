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
              width: ["col12.3"],
            }}>
            <Text
              variant={"body1"}
              sx={{
                fontWeight: "bold",
              }}>
              {archive.date}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.6"],
            }}>
            <Text
              variant={"body1"}
              sx={{
                fontWeight: "bold",
              }}>
              {archive.title}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.3"],
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
              mt: 2,
              width: ["col12.12"],
            }}>
            <Flex
              sx={{
                justifyContent: "center",
              }}>
              <Text
                variant={"body3"}
                sx={{
                  maxWidth: "paragraph.sm",
                  lineHeight: 1.2,
                  whiteSpace: "pre-wrap",
                }}>
                {archive.description}
              </Text>
            </Flex>
          </Box>
          <Box
            sx={{
              mt: 2,
              width: ["col12.12"],
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
        <Flex
          sx={{
            flexWrap: "wrap",
          }}>
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
              width: ["col12.1"],
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
              px: 8,
            }}>
            <Flex
              sx={{
                justifyContent: "center",
              }}>
              <Text
                variant={"body3"}
                sx={{
                  maxWidth: "paragraph.sm",
                  lineHeight: 1.2,
                  whiteSpace: "pre-wrap",
                }}>
                {archive.description}
              </Text>
            </Flex>
          </Box>
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
          </Box>
          <Box
            sx={{
              width: ["col12.1"],
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
