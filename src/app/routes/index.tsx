import { ReactNode } from "react";
import NotFound from "../page/Not-Found";
import Home from "../page/Home";
import { ROUTE_PATHS } from "./path";
import About from "../page/About";
import Skills from "../page/Skills";
import Project from "../page/Project";
import Contact from "../page/Contact";

type RouteType = {
  path: string;
  component: ReactNode;
};

const { ABOUT, CONTACTS, HOME, PROJECTS, SKILLS } = ROUTE_PATHS;

export const ROUTES: RouteType[] = [
  {
    path: "*",
    component: <NotFound />,
  },
  {
    path: HOME,
    component: <Home />,
  },
  {
    path: ABOUT,
    component: <About />,
  },
  {
    path: SKILLS,
    component: <Skills />,
  },
  {
    path: PROJECTS,
    component: <Project />,
  },
  {
    path: CONTACTS,
    component: <Contact />,
  },
];
