import { ProjectType } from "../shared/types";

export const toCapitalise = (str: string): string => {
  if (!str.includes(" ")) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  } else {
    const arr = str.split(" ");
    const result: string[] = [];

    arr.forEach((el) => result.push(toCapitalise(el)));

    return result.join(" ");
  }
};

export const convertDate = (date: string): string => {
  const [year, month] = date.split("-");
  const monthName = getMonthName(+month);

  return `${monthName} ${year}`;
};

export const getMonthName = (month: number): string => {
  const date = new Date();
  date.setMonth(month - 1);
  return date.toLocaleString("en-US", { month: "long" });
};

export const getDateObj = (date: string): number => +new Date(date);

export const sortProjects = (
  first: ProjectType,
  second: ProjectType,
  option: string
): number => {
  const firstDate = getDateObj(first.date);
  const secondDate = getDateObj(second.date);
  return sortCases(firstDate, secondDate, option);
};

export const sortCases = (first: number, second: number, option: string) => {
  switch (option) {
    case "latest":
      return second - first;
    case "oldest":
      return first - second;
    default:
      return 0;
  }
};

export const filterProjects = (
  array: ProjectType[],
  category: string
): ProjectType[] => {
  return array.filter((el) => el.category === category);
};
