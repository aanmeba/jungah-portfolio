import { Props } from "../../shared/types";

const MainContainer = ({ children }: Props) => {
  return (
    <main className="border-t border-slate-200 relative mb-28 ml-96 border-t-0 ">
      {children}
    </main>
  );
};

export default MainContainer;
