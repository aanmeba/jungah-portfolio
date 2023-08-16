import { ControlOptions, SelectEvent } from "../shared/types";
import Select from "./layouts/Select";

const ProjectsNavbar = ({
  filterOption,
  sortOption,
  handleOptions,
}: ControlOptions) => {
  const handleChange = (event: SelectEvent) => {
    const { id, value } = event.target;
    handleOptions(id, value);
  };

  const selectOptions = ["filter", "sort"];
  const filterOptionsList = ["project", "practice", "open source"];
  const sortOptionsList = ["latest", "oldest"];

  return (
    <nav className="flex flex-wrap gap-x-4 text-sm justify-start mt-2 md:justify-end max-w-4xl">
      {selectOptions.map((select, i) => (
        <Select
          options={select === "filter" ? filterOption : sortOption}
          type={select}
          key={i}
          handleChange={handleChange}
          optionsList={
            select === "filter" ? filterOptionsList : sortOptionsList
          }
        />
      ))}
    </nav>
  );
};

export default ProjectsNavbar;
