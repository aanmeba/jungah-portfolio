import { generateCloudinaryUrl } from "../services/cloudinary-services";

const Profile = () => {
  const profileImg = generateCloudinaryUrl("jungah_profile-circle");
  return (
    <figure className="flex justify-center ">
      <img src={profileImg} alt="jungah" className="w-48" />
    </figure>
  );
};

export default Profile;
