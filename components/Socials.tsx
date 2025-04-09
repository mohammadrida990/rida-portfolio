import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

type SocialProps = {
  containerStyles?: string;
  iconStyles?: string;
};
const socials = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/mohammad-rida-06399163/",
  },
  { icon: <FaGithub />, link: "https://github.com/mohammadrida990" },
  { icon: <FaWhatsapp />, link: "https://wa.me/71163995" },
];
const Socials = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.link}
          target="_blank"
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Socials;
