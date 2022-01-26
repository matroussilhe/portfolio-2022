import { helper } from "@services";

// INDEX
export type WorkImage = string;

export type Work = {
  title: string;
  subtitle: string;
  date: string;
  tags: string[];
  images: WorkImage[];
  color: string;
  link: string;
};

export type Archive = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  link?: string;
};

export type IndexPageDocument = {
  works: Work[];
  archives: Archive[];
};

// ABOUT
export type Bio = {
  description: string;
};

export type Expertise = {
  description: string;
};

export type SkillItem = {
  text: string;
};

export type Skill = SkillItem[];

export type InterestItem = {
  text: string;
};

export type Interest = InterestItem[];

export type SocialItem = {
  text: string;
  link: string;
};

export type Social = SocialItem[];

export type AboutPageDocument = {
  bio: Bio;
  expertise: Expertise;
  skills: Skill[];
  interests: Skill[];
  socials: Social[];
};

const parseGroupItem = <T extends SkillItem | InterestItem | SocialItem>(item: any) => {
  // group items by group value
  const groupedItems = item.items.reduce((acc: any, item: any) => {
    const { text, link, group } = item;

    const groupItem = {
      text: text,
      ...(link ? { link: link } : {}),
    } as T;

    if (!acc[group]) {
      acc[group] = [];
      acc[group].push(groupItem);
    } else {
      acc[group].push(groupItem);
    }

    return acc;
  }, {});

  // transform grouped items into arrays
  const result = [];
  for (const value of Object.values(groupedItems)) {
    result.push([...value as T[]]);
  }

  return result;
};

export const parseIndexPageDocument = (document: any): IndexPageDocument => {
  try {
    const result: IndexPageDocument = document.data.body.reduce((acc: IndexPageDocument, item: any) => {
      if (item.slice_type === "work") {
        acc.works.push({
          title: helper.asText(item.primary.title) || "",
          subtitle: helper.asText(item.primary.subtitle) || "",
          date: helper.asText(item.primary.date) || "",
          tags: item.items.map((item: any) => item.tag),
          images: [
            item.primary?.first_image?.url || null,
            item.primary?.second_image?.url || null,
          ],
          color: item.primary.color,
          link: item.primary.link,
        });
      } else if (item.slice_type === "archive") {
        acc.archives.push({
          title: helper.asText(item.primary.title) || "",
          description: helper.asText(item.primary.description) || "",
          date: helper.asText(item.primary.date) || "",
          tags: item.items.map((item: any) => item.tag),
          ...(item.primary["link"] ? { link: item.primary["link"] } : {}),
        });
      }

      return acc;
    }, {
      archives: [],
      works: [],
    });

    return result;
  } catch (error) {
    console.error("parseIndexPageDocument error: ", error);

    return {
      works: [],
      archives: [],
    };
  }
};

export const parseAboutPageDocument = (document: any): AboutPageDocument => {
  try {
    const result: AboutPageDocument = document.data.body.reduce((acc: AboutPageDocument, item: any) => {
      if (item.slice_type === "bio") {
        acc.bio.description = helper.asText(item.primary.description) || "";
      } else if (item.slice_type === "expertise") {
        acc.expertise.description = helper.asText(item.primary.description) || "";
      } else if (item.slice_type === "skill") {
        acc.skills = parseGroupItem(item);
      } else if (item.slice_type === "interest") {
        acc.interests = parseGroupItem(item);
      } else if (item.slice_type === "social") {
        acc.socials = parseGroupItem(item);
      }

      return acc;
    }, {
      bio: { description: "" },
      expertise: { description: "" },
      skills: [],
      interests: [],
      socials: [],
    });

    return result;
  } catch (error) {
    console.error("parseAboutPageDocument error: ", error);

    return {
      bio: { description: "" },
      expertise: { description: "" },
      skills: [],
      interests: [],
      socials: [],
    };
  }
};
