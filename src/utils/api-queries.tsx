import { client } from "@utils";

export type Test = {
  title: string;
  body: string;
};

export const getTests = async (): Promise<Test[]> => {
  const response = await client().getAllByType("test");

  const parsedResponse = response.map((item) => {
    const res: any = {};

    for (const [key, value] of Object.entries(item.data)) {
      res[key] = value?.[0]?.text;
    }

    return res;
  });

  return parsedResponse;
};
