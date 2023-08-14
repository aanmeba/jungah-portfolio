import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopEmpty } from "@fortawesome/free-regular-svg-icons";
import {
  faRocket,
  faEnvelope,
  faFile,
  faLocationDot,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GithubIcon = () => <FontAwesomeIcon icon={faGithub} />;
export const LinkedInIcon = () => <FontAwesomeIcon icon={faLinkedinIn} />;
export const EmailIcon = () => <FontAwesomeIcon icon={faEnvelope} />;
export const EmailIconEmpty = () => <FontAwesomeIcon icon={faEnvelopEmpty} />;
export const DeployedIcon = () => <FontAwesomeIcon icon={faRocket} />;
export const FileIcon = () => <FontAwesomeIcon icon={faFile} />;
export const LocationIcon = () => <FontAwesomeIcon icon={faLocationDot} />;
export const LinkIcon = () => <FontAwesomeIcon icon={faLink} />;
