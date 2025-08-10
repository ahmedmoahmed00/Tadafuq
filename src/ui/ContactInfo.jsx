import { FaPhone, FaRegEnvelope } from "react-icons/fa";

const contactItems = [
  {
    icon: <FaRegEnvelope size={20} className="text-[#EB5212]" />,
    text: "aal@tfarraj.tv",
    href: "#",
  },
  {
    icon: <FaPhone size={20} className="text-[#EB5212] rotate-[100deg]" />,
    text: "+966 590 082 693",
    href: "#",
  },
  {
    icon: <FaPhone size={20} className="text-[#EB5212] rotate-[100deg]" />,
    text: "+966 590 082 693",
    href: "#",
  },
];

function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <h4 className="Plex-Sans font-bold text-[#EB5212]">تواصل معنا</h4>
      <ul className="rtl KumbhSans flex flex-col gap-4">
        {contactItems.map(({ icon, text, href }, idx) => (
          <li key={idx}>
            <a
              href={href}
              className="flex items-center gap-[14px] duration-300 hover:text-[#EB5212]"
            >
              <span>{icon}</span>
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactInfo;
