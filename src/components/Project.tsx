import { convertDate } from "../helpers/helpers";
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
  const imgUrl = new URL(`../assets/img/${image}.png`, import.meta.url).href;

  return (
    <div className="divide-y divide-slate-100 mt-8 border-t border-slate-100">
      <div className="px-8 py-10 w-full flex gap-8 max-w-4xl">
        <div className="flex flex-col items-start w-2/3">
          <time className="font-mono text-xs text-slate-400">
            {convertDate(date)}
          </time>

          <div className="flex justify-between w-full">
            <h3 className="mt-2 text-lg font-bold text-slate-900">{title}</h3>

            <ul className="flex items-center m-0 pl-0 list-none">
              {availableLinks.map((link, index) => {
                if (link)
                  return (
                    <li key={index} className="mr-1.5">
                      <a href={link} className="no-underline" target="_blank">
                        {linksIcons[index]}
                      </a>
                    </li>
                  );
              })}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="mt-1 text-base leading-7 text-slate-700">
              {description}
            </p>
            <ul className="flex flex-wrap">
              {techStack?.map((tech, i) => (
                <Li item={tech} key={i} />
              ))}
            </ul>
          </div>
        </div>
        <figure className="max-w-xl">
          <img src={imgUrl} alt={title} className="max-w-xs" />
        </figure>
      </div>
    </div>
  );
};

export default Project;
