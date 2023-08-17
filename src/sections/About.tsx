import AboutContent from "../components/AboutContent";
import Profile from "../components/Profile";

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <h1 className="font-mono text-center">Jungah Ahn 👩🏻‍💻</h1>
        <h1 className="font-mono text-center text-slate-400 text-xs">
          Junior Full-Stack Developer
        </h1>
      </div>
      <div className="lg:flex lg:flex-col lg:gap-8 hidden">
        <Profile />
        <AboutContent />
      </div>
    </div>
  );
};

export default About;
