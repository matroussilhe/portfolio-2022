import { helper } from "@utils";

export type WorkButton = {
  text: string;
  href: string;
};

export type Work = {
  title: string;
  subtitle: string;
  link: string;
  tags: string[];
  images: any[];
};

export type ArchiveButton = {
  text: string;
  href: string;
};

export type Archive = {
  title: string;
  description: string;
  tags: string[];
  button: ArchiveButton;
};

export type IndexPageDocument = {
  works: Work[];
  archives: Archive[];
};

export const parseIndexPageDocument = (document: any): IndexPageDocument => {
  const result = document.data.body.reduce((acc: IndexPageDocument, item: any) => {
    if (item.slice_type === "work") {
      acc.works.push({
        title: helper.asText(item.primary.title) || "",
        subtitle: helper.asText(item.primary.subtitle) || "",
        link: item.primary.link,
        tags: item.items.map((item: any) => item.tag),
        images: [
          item.primary?.first_image?.url || null,
          item.primary?.second_image?.url || null,
        ],
      });
    } else if (item.slice_type === "archive") {
      acc.archives.push({
        title: helper.asText(item.primary.title) || "",
        description: helper.asText(item.primary.description) || "",
        tags: item.items.map((item: any) => item.tag),
        button: {
          text: item.primary["button_text"],
          href: helper.asLink(item.primary["button_link"]) || "",
        },
      });
    }

    return acc;
  }, { archives: [], works: []});

  return result;
};
