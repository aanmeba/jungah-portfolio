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
    <nav className="flex gap-4 text-sm justify-end max-w-4xl">
      {selectOptions.map((select, i) => (
        <Select
          value={select === "filter" ? filterOption : sortOption}
          option={select}
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
