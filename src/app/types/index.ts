import { ReactNode } from "react";
import { HeaderLinksType } from "../components/Header/constants";

export type ChildrenType = ReactNode;

export type LayoutProps = {
  children: ChildrenType;
};

export type HeaderProps = {
  links: HeaderLinksType[];
};

export type HaederProps = {
  links: Headers[];
};
