import { generateCloudinaryUrl } from "../services/cloudinary-services";

const About = () => {
  const profileImg = generateCloudinaryUrl("jungah_profile-circle");
  return (
    <div className="flex flex-col gap-8">
      <div className="">
        <h1 className="font-mono text-center">Jungah Ahn 👩🏻‍💻</h1>
        <h1 className="font-mono text-center text-slate-400 text-xs">
          Junior Full-Stack Developer
        </h1>
      </div>
      <figure className="w-full lg:flex lg:justify-center hidden">
        <img src={profileImg} alt="jungah" className="w-48" />
      </figure>
      <div className="w-full">
        <div className="text-sm gap-4 lg:flex flex-col hidden">
          <h1 className="font-mono">Hello World!</h1>
          <p className="text-gray-700 ">
            I'm Jungah, a growth-minded junior full-stack developer with a
            diverse background in activism and translation. I embrace new
            challenges and continuously strive for personal and professional
            growth.
          </p>
          <p className="text-gray-700">
            I enjoy running 🏃🏻‍♀️! You can see me running or volunteering (almost)
            every Saturday at Rhodes Parkrun. In 2023, my goal is to complete a
            full marathorn distance, 42.195km without any injury. Wish me luck!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
