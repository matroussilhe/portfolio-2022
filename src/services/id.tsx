import { customAlphabet } from "nanoid";

const ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const SIZE = 10;
const nanoid = customAlphabet(ALPHABET, SIZE);

export const generateId = () => {
  return nanoid();
};
