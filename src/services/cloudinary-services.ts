import { Cloudinary } from "@cloudinary/url-gen";

const CLOUD_NAME = import.meta.env.VITE_IMG_CLOUD_NAME;

const cld = new Cloudinary({
  cloud: { cloudName: CLOUD_NAME },
});

export const generateCloudinaryUrl = (path: string) => {
  const version = "v1692000362/";
  const directories = "portfolio/";
  const url = version + directories + path;
  const cldImg = cld.image(url);
  return cldImg.toURL().split("?")[0] + ".png";
};
