import contactDetail from "../data/contact.json";
import { EmailIcon, FileIcon, GithubIcon, LinkedInIcon } from "./Icons";

const Contact = () => {
  const icons = [<GithubIcon />, <LinkedInIcon />, <EmailIcon />, <FileIcon />];
  return (
    <article>
      <ul className="flex items-center m-0 pl-0 list-none gap-2">
        {contactDetail.map((item, i) => (
          <li key={item.id}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              className="text-xs"
            >
              {icons[i]} {item.name}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Contact;
