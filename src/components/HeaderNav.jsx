import { NavLink } from "react-router-dom";
import Languages from "./Languages";

function HeaderNav({ className }) {
  const navLinkStyles =
    "KumbhSans text-white font-[400] hover:text-[#EB5212] duration-200";
  return (
    <nav>
      <ul className={`flex items-center gap-8 ` + className}>
        <li>
          <Languages />
        </li>
        <li>
          <NavLink to="/login" className={navLinkStyles + " link"}>
            تسجيل الدخول
          </NavLink>
        </li>

        <li>
          <NavLink to="/pricing" className={navLinkStyles + " link"}>
            الأسعار
          </NavLink>
        </li>
        <li>
          <NavLink to="/publishers" className={navLinkStyles + " link"}>
            الناشرون
          </NavLink>
        </li>
        <li>
          <NavLink to="/advertisers" className={navLinkStyles + " link"}>
            المعلنون
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" className={navLinkStyles + " link"}>
            الرئيسية
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
