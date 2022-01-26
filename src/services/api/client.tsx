import * as prismic from "@prismicio/client";

export const REPOSITORY_NAME = "matroussilhe-portfolio-2022";

export const client = (req = null) => {
  const endpoint = prismic.getEndpoint(REPOSITORY_NAME);

  const client = prismic.createClient(endpoint, {});

  return client;
};
