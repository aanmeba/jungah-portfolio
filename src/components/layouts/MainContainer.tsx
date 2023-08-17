import { Props } from "../../shared/types";

const MainContainer = ({ children }: Props) => {
  return (
    <main className="border-t border-slate-200 relative lg:mb-28 lg:ml-96 border-t-0 ">
      {children}
    </main>
  );
};

export default MainContainer;
