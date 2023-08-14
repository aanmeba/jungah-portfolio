import { toCapitalise } from "../../helpers/helpers";
import { SelectEvent } from "../../shared/types";

type SelectType = {
  value: string;
  handleChange: (event: SelectEvent) => void;
  option: string;
  optionsList: string[];
};

const Select = ({ value, option, optionsList, handleChange }: SelectType) => {
  return (
    <select
      className="border-slate-200 p-2 font-mono"
      value={value}
      id={option}
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
