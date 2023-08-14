import Project from "../components/Project";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { ControlOptions, ProjectList } from "../shared/types";

const Projects = ({
  projectList,
  filterOption,
  sortOption,
  handleOptions,
}: ProjectList & ControlOptions) => {
  return (
    <>
      <div className="pb-12 pt-16 px-8 h-full max-w-4xl">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold leading-7 text-slate-900">
            Projects
          </h1>
          <p className="text-xs text-gray-400 italic">
            *Some of projects may take seconds to load the deployed apps after
            inactivity
          </p>
        </div>
        <ProjectsNavbar
          filterOption={filterOption}
          sortOption={sortOption}
          handleOptions={handleOptions}
        />
      </div>
      {projectList.map((proj, i) => (
        <Project project={proj} key={i} />
      ))}
    </>
  );
};

export default Projects;
