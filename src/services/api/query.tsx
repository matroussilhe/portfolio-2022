import { client } from "@services";

export const getIndexPageDocument = async () => {
  try {
    const document = await client().getByUID("index_page", "index_page_main");

    return document;
  } catch (error) {
    console.error("getIndexPageDocument error: ", error);

    return null;
  }
};

export const getAboutPageDocument = async () => {
  try {
    const document = await client().getByUID("about_page", "about_page_main");

    return document;
  } catch (error) {
    console.error("getAboutPageDocument error: ", error);

    return null;
  }
};
