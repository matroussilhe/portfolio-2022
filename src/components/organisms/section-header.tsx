import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  FlexProps,
  Grid,
  Image,
  Link,
  Responsive,
  Tag,
  Text,
  TextIcon,
  TextParagraphTitle,
} from "@components";
import {
  Header,
} from "@services";

export type SectionHeaderProps = FlexProps & {
  header: Header;
};

export const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
  header,
  ...rest
}) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        backgroundColor: "background",
      }}
      {...rest}>
      <Text
        variant={["heading4", "heading3", "heading2", "heading1"]}
        sx={{
          px: [3, 4, 5, 5],
          mb: [1, 1, 2, 2],
          fontWeight: "bold",
        }}>
        {header.title}
      </Text>
      <Text
        variant={["label3", "label2", "body3", "body1"]}
        sx={{
          px: [3, 4, 5, 5],
          mb: [3, 4, 5, 5],
          lineHeight: 1,
          fontFamily: "heading",
        }}>
        {header.subtitle.toUpperCase()}
      </Text>
      <Flex
        sx={{
          height: ["190px", "300px", "450px", "600px"],
          position: "relative",
          mb: [3, 4, 5, 5],
        }}>
        <Image
          src={header.image}
          loading={"lazy"}
          decoding={"async"}
          sx={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            width: "100%",
            height: ["190px", "300px", "450px", "600px"],
            position: "absolute",
            top: 0,
            left: 0,
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </Flex>
      <Responsive mdAndDown>
        <Flex
          sx={{
            px: [3, 4],
            flexWrap: "wrap",
          }}>
          <Box
            sx={{
              width: ["col12.12", "col12.4"],
              pr: [0, 1],
              mb: [3, 3],
            }}>
            <TextParagraphTitle
              sx={{
                mb: 1,
              }}>
              {"역할_ROLE"}
            </TextParagraphTitle>
            <Text
              variant={["body2", "body2"]}
              sx={{
                lineHeight: 1,
              }}>
              {header.role}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.12", "col12.8"],
              pl: [0, 1],
              mb: [3, 3],
            }}>
            <TextParagraphTitle
              sx={{
                mb: 1,
              }}>
              {"타임라인_TIMELINE"}
            </TextParagraphTitle>
            <Text
              variant={["body2", "body2"]}
              sx={{
                lineHeight: 1,
              }}>
              {header.timeline}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.12", "col12.4"],
              pr: [0, 1],
              mb: [3, 3],
            }}>
            <TextParagraphTitle
              sx={{
                mb: 1,
              }}>
              {"크레딧_CREDITS"}
            </TextParagraphTitle>
            <Text
              variant={["body2", "body2"]}
              sx={{
                lineHeight: 1,
              }}>
              {header.credit}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.12", "col12.8"],
              pl: [0, 1],
              mb: [3, 3],
            }}>
            <TextParagraphTitle
              sx={{
                mb: 1,
              }}>
              {"기술_TECHNOLOGIES"}
            </TextParagraphTitle>
            <Grid
              gap={"sm"}>
              {header.tags.map((tag, index) => (
                <Tag
                  key={`section-header-tag-${index}`}
                  size={"md"}>
                  {tag}
                </Tag>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              width: ["col12.12", "col12.12"],
              mb: [3, 3],
            }}>
            <Text
              variant={["body2", "body2"]}
              sx={{
                maxWidth: "paragraph.lg",
              }}>
              {header.introduction}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.12", "col12.12"],
            }}>
            <Link
              href={header.link}
              target={"_blank"}>
              <TextIcon>
                {"See live website"}
              </TextIcon>
            </Link>
          </Box>
        </Flex>
      </Responsive>
      <Responsive lgAndUp>
        <Flex
          sx={{
            px: 5,
          }}>
          <Box
            sx={{
              width: ["col12.2"],
              pr: 2,
            }}>
            <TextParagraphTitle
              sx={{
                mb: 1,
              }}>
              {"역할_ROLE"}
            </TextParagraphTitle>
            <Text
              variant={[null, null, "body2", "body1"]}
              sx={{
                mb: 4,
                lineHeight: 1,
              }}>
              {header.role}
            </Text>
            <TextParagraphTitle
              sx={{
                mb: 1,
              }}>
              {"타임라인_TIMELINE"}
            </TextParagraphTitle>
            <Text
              variant={[null, null, "body2", "body1"]}
              sx={{
                lineHeight: 1,
              }}>
              {header.timeline}
            </Text>
          </Box>
          <Box
            sx={{
              width: ["col12.4"],
              px: 2,
            }}>
            <TextParagraphTitle
              sx={{
                mb: 1,
              }}>
              {"크레딧_CREDITS"}
            </TextParagraphTitle>
            <Text
              variant={[null, null, "body2", "body1"]}
              sx={{
                mb: 4,
                lineHeight: 1,
              }}>
              {header.credit}
            </Text>
            <TextParagraphTitle
              sx={{
                mb: 1,
              }}>
              {"기술_TECHNOLOGIES"}
            </TextParagraphTitle>
            <Grid
              gap={"sm"}
              containerSx={{
                // pb: 4,
              }}>
              {header.tags.map((tag, index) => (
                <Tag
                  key={`section-header-tag-${index}`}
                  size={"md"}>
                  {tag}
                </Tag>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              width: ["col12.6"],
              pl: 2,
            }}>
            <Text
              variant={[null, null, "body2", "body1"]}
              sx={{
                mb: 4,
                maxWidth: "paragraph.lg",
              }}>
              {header.introduction}
            </Text>
            <Link
              href={header.link}
              target={"_blank"}>
              <TextIcon
                sx={{
                  fontSize: [null, null, "1.375rem", "1.75rem"],
                }}>
                {"See live website"}
              </TextIcon>
            </Link>
          </Box>
        </Flex>
      </Responsive>
    </Flex>
  );
};
