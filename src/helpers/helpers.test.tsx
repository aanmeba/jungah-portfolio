import {
  convertDate,
  filterProjects,
  getDateObj,
  getMonthName,
  sortCases,
  toCapitalise,
} from "./helpers";
import { describe, test, expect } from "vitest";

describe("toCapitalise", () => {
  test("returns a capitalised string", () => {
    const oneWord = toCapitalise("hello");
    expect(oneWord).toBe("Hello");

    const twoWords = toCapitalise("hello world");
    expect(twoWords).toBe("Hello World");
  });
});

describe("convertData", () => {
  test("returns correct month in English and year", () => {
    const aug = convertDate("1990-08");
    const nov = convertDate("2023-11");

    expect(aug).toBe("August 1990");
    expect(nov).toBe("November 2023");
  });
});

describe("getMonthName", () => {
  test("returns a correct month name in English", () => {
    const jan = getMonthName(1);
    const mar = getMonthName(3);
    expect(jan).toBe("January");
    expect(mar).toBe("March");
  });
});

describe("getDateObj", () => {
  test("turns date in string into date in number", () => {
    const dateInStr = getDateObj("2022-06");
    expect(dateInStr).toBe(+new Date(dateInStr));
  });
});

describe("sortCases", () => {
  test("returns positive, negative or 0 depending on the option", () => {
    const first = getDateObj("2021-11");
    const second = getDateObj("2022-11");
    const latest = sortCases(first, second, "latest");
    const oldest = sortCases(first, second, "oldest");
    expect(latest).toBeGreaterThan(0);
    expect(oldest).toBeLessThan(0);
  });
});

describe("filterProjects", () => {
  test("returns a filtered array", () => {
    const arr = [
      {
        id: "",
        title: "",
        links: { github: "" },
        description: "",
        date: "",
        tech_stack: [""],
        category: "project",
      },
      {
        id: "",
        title: "",
        links: { github: "" },
        description: "",
        date: "",
        tech_stack: [""],
        category: "practice",
      },
      {
        id: "",
        title: "",
        links: { github: "" },
        description: "",
        date: "",
        tech_stack: [""],
        category: "open source",
      },
      {
        id: "",
        title: "",
        links: { github: "" },
        description: "",
        date: "",
        tech_stack: [""],
        category: "project",
      },
    ];

    const projects = filterProjects(arr, "project");
    const practice = filterProjects(arr, "practice");
    expect(projects).toHaveLength(2);
    expect(practice).toHaveLength(1);
  });
});
