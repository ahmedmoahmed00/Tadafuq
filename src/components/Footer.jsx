import { Link } from "react-router-dom";
import logoFooter from "../assets/Images/Icons/logoFooter.png";
import SocialIcons from "../ui/SocialIcons";
import SiteMap from "../ui/SiteMap";
import ImportantLinks from "../ui/ImportantLinks";
import ContactInfo from "../ui/ContactInfo";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t backdrop-blur-[30px] border-t-[#22467D] bg-[linear-gradient(137.34deg,rgba(7,4,43,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)]">
      <div className="container flex flex-col gap-6 pt-[100px] pb-[30px]">
        <div className="flex max-[500px]:text-center max-[450px]:gap-3 max-[992px]:mx-auto max-[992px]:grid max-[992px]:grid-cols-2 max-[992px]:gap-8 justify-between text-white text-right">
          <ContactInfo />
          <ImportantLinks />
          <SiteMap />
          <div className="flex flex-col gap-8 ">
            <img
              className="max-[500px]:max-w-[120px] max-[500px]:ml-auto"
              src={logoFooter}
              alt="Icon Footer"
            />
            <SocialIcons />
          </div>
        </div>
        <hr className="text-[#FFFFFF1F]" />
        <div className="text-center text-white KumbhSans font-[600]">
          <p>{currentYear} ⁠جميع الحقوق محفوظة لشركة تدفق للإعلانات الرقمية</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

//
