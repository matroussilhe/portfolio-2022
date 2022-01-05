import React from "react";

import Head from "next/head";

import { Box } from "@components/box";
import { Flex } from "@components/flex";
import { Text } from "@components/text";

const Index = () => {
  // WIP: placeholders
  const title = "어이 Hello, I’m Mathieu a full stack developer building something special and mostly foucs on these technologies. I’m currently fully employed at QMIT Inc. | 저는 웹 개발자입니다. and live in SEOUL KOREA.";

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
            pl: [8],
          }}>
          <Text variant={"heading3"}>
            {title}
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default Index;
