import { ROUTE_PATHS } from "../../../routes/path";

export type HeaderLinksType = {
  path: string;
  title: string;
};

export const HEADER_LINKS: HeaderLinksType[] = [
  {
    title: "Home",
    path: ROUTE_PATHS.HOME,
  },
  {
    title: "About",
    path: ROUTE_PATHS.ABOUT,
  },
  {
    title: "Skills",
    path: ROUTE_PATHS.SKILLS,
  },
  {
    title: "Contacts",
    path: ROUTE_PATHS.CONTACTS,
  },
];
