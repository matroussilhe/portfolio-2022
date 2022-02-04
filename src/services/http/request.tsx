import axios from "axios";

export const get = async (url: string) => {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    console.error("request error: ", error);

    return null;
  }
};
