import AboutContent from "../AboutContent";
import FooterContent from "../FooterContent";

const Footer = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 p-20 lg:hidden ">
      <div className="w-9/12 mx-auto flex flex-col gap-8">
        <AboutContent />
        <FooterContent />
      </div>
    </footer>
  );
};

export default Footer;
