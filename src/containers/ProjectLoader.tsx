import { ProjectType } from "../shared/types";
import { filterProjects, sortProjects } from "../helpers/helpers";
import { useCallback, useEffect, useState } from "react";
import projectList from "../data/projects.json";
import Projects from "../sections/Projects";

const ProjectLoader = () => {
  const defaultSort = "latest";
  const defaultFilter = "project";
  const [filterOption, setFilterOption] = useState(defaultFilter);
  const [sortOption, setSortOption] = useState(defaultSort);
  const [projects, setProjects] = useState<ProjectType[]>(projectList);

  const applyFilterAndSort = useCallback(() => {
    const filteredProjects = filterProjects(projectList, filterOption);
    const sortedProjects = filteredProjects.sort((a, b) =>
      sortProjects(a, b, sortOption)
    );

    setProjects(sortedProjects);
  }, [filterOption, sortOption]);

  useEffect(() => {
    applyFilterAndSort();
  }, [applyFilterAndSort]);

  const handleOptions = (id: string, value: string) => {
    if (id === "sort") setSortOption(value);
    if (id === "filter") setFilterOption(value);
  };

  return (
    <>
      <Projects
        projectList={projects}
        filterOption={filterOption}
        sortOption={sortOption}
        handleOptions={handleOptions}
      />
    </>
  );
};

export default ProjectLoader;
