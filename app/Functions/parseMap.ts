import { ResortMapIcons } from "../Types/types";

export const parseMap = (map: string): ResortMapIcons[][] => {
  return map
    .trim()
    .split(/\r?\n/)
    .map((row) => row.trimEnd().split("") as ResortMapIcons[]);
};