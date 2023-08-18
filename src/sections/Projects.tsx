import Project from "../components/Project";
import ProjectsNavbar from "../components/ProjectsNavbar";
import SectionTitle from "../components/layouts/SectionTitle";
import { ControlOptions, ProjectList } from "../shared/types";

const Projects = ({
  projectList,
  filterOption,
  sortOption,
  handleOptions,
}: ProjectList & ControlOptions) => {
  return (
    <>
      <div className="pb-12 pt-16 px-8 h-full max-w-4xl lg:mx-0 md:mx-auto relative">
        <div className="flex flex-col">
          <SectionTitle>Projects</SectionTitle>

          <p className="text-xs text-slate-400 italic absolute bottom-2 hidden sm:block">
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
