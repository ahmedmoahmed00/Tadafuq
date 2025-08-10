import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaFacebookF size={20} />,
    href: "#",
    bgColor: "bg-white",
    textColor: "text-[#003381]",
    hoverColor: "hover:text-[#EB5212]",
  },
  {
    icon: <FaTwitter size={20} />,
    href: "#",
    bgColor: "bg-white",
    textColor: "text-[#003381]",
    hoverColor: "hover:text-[#EB5212]",
  },
  {
    icon: <FaInstagram size={20} />,
    href: "#",
    bgColor: "bg-white",
    textColor: "text-[#003381]",
    hoverColor: "hover:text-[#EB5212]",
  },
];

function SocialIcons() {
  return (
    <div className="flex items-center justify-end gap-3">
      {socialLinks.map(
        ({ icon, href, bgColor, textColor, hoverColor }, idx) => (
          <a
            aria-label="Link"
            key={idx}
            href={href}
            className={`${bgColor} ${textColor} ${hoverColor} w-[40px] h-[40px] rounded-full flex items-center justify-center cursor-pointer hover:scale-[1.1] duration-200`}
          >
            {icon}
          </a>
        )
      )}
    </div>
  );
}

export default SocialIcons;
