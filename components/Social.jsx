import { icons } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/Phuse21" },
  {
    icons: <FaLinkedin />,
    path: "https://www.linkedin.com/in/phuse-a82169279/",
  },
  {
    icons: <FaTwitter />,
    path: "https://x.com/KhvngPhuse?t=DUKhEVupd6QjAwV1xncd6w&s=09",
  },
];
const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <div key={index} className={iconStyles}>
            <Link target="_blank" href={social.path}>
              {social.icons}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Social;
