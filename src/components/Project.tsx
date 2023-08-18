import { convertDate } from "../helpers/helpers";
import { generateCloudinaryUrl } from "../services/cloudinary-services";
import { ProjectProps } from "../shared/types";
import { DeployedIcon, GithubIcon, LinkIcon } from "./Icons";
import Li from "./layouts/Li";

const Project = ({ project }: ProjectProps) => {
  const {
    title,
    links,
    description,
    date,
    tech_stack: techStack,
    image,
  } = project;

  const availableLinks = Object.values(links).map((link) => link);
  const linksIcons = [<GithubIcon />, <DeployedIcon />, <LinkIcon />];
  const imgUrl = generateCloudinaryUrl(`img/${image}`);

  return (
    <div className="divide-y divide-slate-100 border-t border-slate-100">
      <div className="px-8 py-10 w-full flex gap-8 max-w-4xl lg:mx-0 md:mx-auto">
        <div className="flex flex-col w-full items-stretch md:items-start md:w-2/3">
          <time className="font-mono text-xs text-slate-400">
            {convertDate(date)}
          </time>

          <div className="flex justify-between w-full">
            <h3 className="mt-2 font-roboto text-lg font-bold ">{title}</h3>

            <ul className="flex items-center m-0 pl-0 list-none">
              {availableLinks.map((link, index) => {
                if (link)
                  return (
                    <li key={index} className="mr-1.5 mt-2">
                      <a
                        href={link}
                        className="no-underline  hover:text-highlighter"
                        target="_blank"
                      >
                        {linksIcons[index]}
                      </a>
                    </li>
                  );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="mt-1 text-base leading-7  ">{description}</p>
            <ul className="flex flex-wrap">
              {techStack?.map((tech, i) => (
                <Li item={tech} key={i} />
              ))}
            </ul>
          </div>
        </div>
        <figure className="max-w-xl hidden md:block">
          <img src={imgUrl} alt={title} className="max-w-xs" />
        </figure>
      </div>
    </div>
  );
};

export default Project;
