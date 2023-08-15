import { generateCloudinaryUrl } from "../services/cloudinary-services";

const About = () => {
  const profileImg = generateCloudinaryUrl("jungah_profile-circle");
  return (
    <div id="about" className="flex flex-col gap-8">
      <figure className="w-full flex justify-center">
        <img src={profileImg} alt="jungah" className="w-48" />
      </figure>
      <div className="w-full">
        <div className="text-sm gap-4 flex flex-col">
          <h1 className="font-mono">Hello World!</h1>
          <p className="text-gray-700 ">
            I'm Jungah, a growth-minded junior full-stack developer with a
            diverse background in activism and translation. I embrace new
            challenges and continuously strive for personal and professional
            growth.
          </p>
          <p className="text-gray-700">
            I enjoy running! You can see me running or volunteering (almost)
            every Saturday at Rhodes Parkrun. In 2023, my goal is to complete a
            full marathorn distance, 42.195km without any injury. Wish me luck!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
