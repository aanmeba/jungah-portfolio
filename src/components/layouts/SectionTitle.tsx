import { Props } from "../../shared/types";

const SectionTitle = ({ children }: Props) => {
  return (
    <h1 className="text-3xl font-roboto font-bold leading-7 text-highlighter">
      {children}
    </h1>
  );
};

export default SectionTitle;
