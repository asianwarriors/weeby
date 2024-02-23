import { META, type ITitle } from "@asianwarriors/consumet-extensions";

export const getTitle = (title: string | ITitle): string =>
  typeof title === "string"
    ? title
    : title.userPreferred ||
      title.romaji ||
      title.english ||
      title.native ||
      "";

export const anilist = new META.Anilist();
