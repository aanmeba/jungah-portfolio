import { ChangeEvent } from "react";

export type Props = {
  children?: string | JSX.Element | JSX.Element[];
  // | () => JSX.Element
  id?: string;
  column?: boolean;
};

export type PropsElement = {
  children: Element | JSX.Element;
};

export type ProjectList = {
  projectList: ProjectType[];
};

export type ProjectProps = {
  project: ProjectType;
};

export type ProjectType = {
  id: string;
  title: string;
  links: Links;
  description: string;
  date: string;
  tech_stack: string[];
  image?: string;
  category: string;
};

export type Links = {
  github: string;
  deployed_link?: string;
  other_link?: string;
};

export type ControlOptions = {
  handleOptions: (val1: string, val2: string) => void;
  filterOption: string;
  sortOption: string;
};

export type SelectEvent = ChangeEvent<HTMLSelectElement>;
