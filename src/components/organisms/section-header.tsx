import React, { FunctionComponent } from "react";

import {
  Box,
  Flex,
  FlexProps,
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
        variant={"heading1"}
        sx={{
          px: 5,
          mb: 2,
          fontWeight: "bold",
        }}>
        {header.title}
      </Text>
      <Text
        variant={"body1"}
        sx={{
          px: 5,
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
      <Flex
        sx={{
          px: 5,
        }}>
        <Box
          sx={{
            pr: 2,
            width: ["col12.2"],
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
            px: 2,
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
            pl: 2,
            width: ["col12.6"],
          }}>
          <Text
            variant={"body1"}
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
