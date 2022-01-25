import { client } from "@utils";

export const getIndexPageDocument = async () => {
  try {
    const document = await client().getByUID("index_page", "index_page_main");

    return document;
  } catch (error) {
    console.error("query error: ", error);

    return null;
  }
};
