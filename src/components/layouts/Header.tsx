import { Props } from "../../shared/types";

const Header = ({ children }: Props) => {
  return (
    <header className="lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-96 lg:items-start lg:overflow-y-auto bg-slate-50 ">
      {/* <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl] gap-4">
        <p className="font-mono text-slate-800">Jungah Ahn</p>
        <p className="font-mono text-slate-400">Junior Full-Stack Developer</p>
      </div> */}
      <div className="relative z-10 mx-auto p-10  min-h-full flex-auto border-b lg:border-r border-slate-200 md:min-w-full">
        {children}
      </div>
    </header>
  );
};

export default Header;
