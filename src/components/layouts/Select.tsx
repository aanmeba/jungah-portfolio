import { toCapitalise } from "../../helpers/helpers";
import { SelectEvent } from "../../shared/types";

type SelectType = {
  options: string;
  handleChange: (event: SelectEvent) => void;
  type: string;
  optionsList: string[];
};

const Select = ({ options, type, optionsList, handleChange }: SelectType) => {
  return (
    <select
      className="border-slate-200 p-2 font-mono"
      value={options}
      id={type}
      onChange={handleChange}
    >
      {optionsList.map((opt, i) => (
        <option key={i} value={opt}>
          {toCapitalise(opt)}
        </option>
      ))}
    </select>
  );
};

export default Select;
