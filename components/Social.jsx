import { icons } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "" },
  { icons: <FaLinkedin />, path: "" },
  { icons: <FaTwitter />, path: "" },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <div key={index} className={iconStyles}>
            {social.icons}
          </div>
        );
      })}
    </div>
  );
};

export default Social;
