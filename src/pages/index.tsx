import React from "react";

import Head from "next/head";

import { Flex } from "@components/flex";
import { Text } from "@components/text";

const Index = () => {
  return (
    <>
      <Head>
        <title>Mat Roussilhe</title>
        <meta name="description" content="Mathieu Roussilhe's portfolio"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Flex>
        <Text
          sx={{
            fontSize: [16, 32],
            fontWeight: "bold",
          }}>
          Hello World
        </Text>
      </Flex>
    </>
  );
};

export default Index;
