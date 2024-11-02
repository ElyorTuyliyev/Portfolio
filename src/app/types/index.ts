import { ReactNode } from "react";
import { HeaderLinksType } from "../components/Header/constants";

export type ChildrenType = ReactNode;

export type LayoutProps = {
  children: ChildrenType;
};

export type HedaerProps = {
  links: HeaderLinksType[];
};

export type HaederProps = {
  links: Headers[];
};
