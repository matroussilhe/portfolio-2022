import React from "react";

import Head from "next/head";

import { Box } from "@components/box";
import { Flex } from "@components/flex";
import { Text } from "@components/text";

const Index = () => {
  // WIP: placeholders
  const homeTitle = "어이 Hello, I'm Mathieu a full stack developer building something special and mostly foucs on these technologies. I'm currently fully employed at QMIT Inc. | 저는 웹 개발자입니다. and live in SEOUL KOREA.";
  const workTitle = "Selected work";
  const archiveTitle = "Archive";
  const footerTitle = "FOOTER";

  return (
    <>
      <Head>
        <title>Mat Roussilhe</title>
        <meta name="description" content="Mathieu Roussilhe's portfolio"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Flex
        sx={{
          height: "100vh",
          backgroundColor: "#F2F2F2",
          alignItems: "center",
        }}>
        <Box
          sx={{
            width: ["50%"],
            pl: [6],
          }}>
          <Text variant={"heading3"}>
            {homeTitle}
          </Text>
        </Box>
      </Flex>
      <Flex
        sx={{
          height: "100vh",
          backgroundColor: "#FFFFFF",
        }}>
        <Box
          sx={{
            width: ["100%"],
            pl: [6],
            mt: [10],
          }}>
          <Text variant={"heading3"}>
            {workTitle}
          </Text>
        </Box>
      </Flex>
      <Flex
        sx={{
          height: "100vh",
          backgroundColor: "#FFFFFF",
        }}>
        <Box
          sx={{
            width: ["100%"],
            pl: [6],
            mt: [10],
          }}>
          <Text variant={"heading3"}>
            {archiveTitle}
          </Text>
        </Box>
      </Flex>
      <Flex
        sx={{
          height: "50vh",
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text variant={"heading2"}>
          {footerTitle}
        </Text>
      </Flex>
    </>
  );
};

export default Index;
