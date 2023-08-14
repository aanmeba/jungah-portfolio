import { Props } from "../../shared/types";

const Header = ({ children }: Props) => {
  return (
    <header className="fixed inset-y-0 left-0 flex w-96 items-start overflow-y-auto bg-slate-50 ">
      <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl] gap-4">
        <p className="font-mono text-slate-800">Jungah Ahn</p>
        <p className="font-mono text-slate-400">Junior Full-Stack Developer</p>
      </div>
      <div className="relative z-10 mx-auto px-4 pb-4 pt-10 min-h-full flex-auto border-x border-slate-200 px-8 py-12">
        {children}
      </div>
    </header>
  );
};

export default Header;
