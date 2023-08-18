import contactDetail from "../data/contact.json";
import { EmailIcon, FileIcon, GithubIcon, LinkedInIcon } from "./Icons";

const Contact = () => {
  const icons = [<GithubIcon />, <LinkedInIcon />, <EmailIcon />, <FileIcon />];
  return (
    <article>
      <ul className="flex mx-0 pl-0 list-none justify-center gap-4 flex-wrap lg:flex-col lg:my-4 lg:gap-1 ">
        {contactDetail.map((item, i) => (
          <li key={item.id}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono "
            >
              <div className="inline-flex gap-3 hover:text-highlighter">
                <span className="w-2 ">{icons[i]}</span>
                <span className="text-slate-600">{item.name}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Contact;
