import { Props } from "../../shared/types";
import FooterContent from "../FooterContent";

const Header = ({ children }: Props) => {
  return (
    <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-96 lg:items-start lg:overflow-y-auto bg-slate-50 ">
      <div className="relative z-10 mx-auto p-10  min-h-full flex-auto border-b lg:border-r border-slate-200 md:min-w-full">
        {children}
      </div>
      <div className="w-full hidden lg:block lg:bottom-4 lg:px-8 lg:fixed ">
        <FooterContent />
      </div>
    </header>
  );
};

export default Header;
