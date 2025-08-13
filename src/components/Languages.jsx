import { FiChevronDown } from "react-icons/fi";
import SA from "../assets/backgrounds/Icons/SA.png";

function Languages() {
  const navLinkStyles =
    "KumbhSans text-white font-[400] hover:text-[#EB5212] duration-200";

  return (
    <div className="relative">
      <button
        className={navLinkStyles + " flex items-center gap-1.5 cursor-pointer"}
      >
        <FiChevronDown className="text-[#EB5212]" />
        العربيه
        <span>
          <img src={SA} alt="SA" />
        </span>
      </button>
    </div>
  );
}

export default Languages;
