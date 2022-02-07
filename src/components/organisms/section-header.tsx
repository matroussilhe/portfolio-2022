import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  Grid,
  Image,
  Link,
  Tag,
  Text,
  TextIcon,
  TextParagraphTitle,
} from "@components";
import {
  Header,
} from "@services";

export type SectionHeaderProps = {
  header: Header;
};

export const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
  header,
}) => {
  return (
    <Flex
      sx={{
        pt: 25,
        pb: 10,
        flexDirection: "column",
        backgroundColor: "background",
      }}>
      <Text
        variant={"heading1"}
        sx={{
          ml: 5,
          mb: 2,
          fontWeight: "bold",
        }}>
        {header.title}
      </Text>
      <Text
        variant={"body1"}
        sx={{
          ml: 5,
          mb: 5,
          lineHeight: 1,
        }}>
        {header.subtitle.toUpperCase()}
      </Text>
      <Flex
        sx={{
          height: "600px",
          position: "relative",
          mb: 5,
        }}>
        <Image
          src={header.image}
          sx={{
            objectFit: "cover",
          }}
        />
        <Box
          sx={{
            height: "600px",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            background: "linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)",
          }}
        />
      </Flex>
      <Flex>
        <Box
          sx={{
            width: ["col12.2"],
            ml: 5,
          }}>
          <TextParagraphTitle
            sx={{
              mb: 1,
            }}>
            {"역할_ROLE"}
          </TextParagraphTitle>
          <Text
            variant={"body1"}
            sx={{
              mb: 4,
            }}>
            {header.role}
          </Text>
          <TextParagraphTitle
            sx={{
              mb: 1,
            }}>
            {"시각표_TIMELINE"}
          </TextParagraphTitle>
          <Text
            variant={"body1"}>
            {header.timeline}
          </Text>
        </Box>
        <Box
          sx={{
            width: ["col12.4"],
          }}>
          <TextParagraphTitle
            sx={{
              mb: 1,
            }}>
            {"기술_TECHNOLOGIES"}
          </TextParagraphTitle>
          <Grid
            gap={"sm"}
            containerSx={{
              pb: 4,
            }}>
            {header.tags.map((tag, index) => (
              <Tag
                key={`section-header-tag-${index}`}
                size={"md"}>
                {tag}
              </Tag>
            ))}
          </Grid>
          <TextParagraphTitle
            sx={{
              mb: 1,
            }}>
            {"크레딧_CREDITS"}
          </TextParagraphTitle>
          <Text
            variant={"body1"}>
            {header.credit}
          </Text>
        </Box>
        <Box
          sx={{
            width: ["col12.6"],
            mr: 5,
          }}>
          <Text
            variant={"body1"}
            sx={{
              mb: 4,
            }}>
            {header.introduction}
          </Text>
          <Link
            href={header.link}
            target={"_blank"}>
            <TextIcon
              sx={{
                fontSize: "1.75rem",
              }}>
              {"See live website"}
            </TextIcon>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};
