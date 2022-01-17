import { helper } from "@utils";

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
  archives: Archive[];
};

export const parseIndexPageDocument = (document: any): IndexPageDocument => {
  const archives = document.data.body.map((item: any) => {
    return {
      title: helper.asText(item.primary.title),
      description: helper.asText(item.primary.description),
      tags: item.items.map((item: any) => item.tag),
      button: {
        text: item.primary["button_text"],
        href: helper.asLink(item.primary["button_link"]),
      },
    };
  });

  return {
    archives,
  };
};
