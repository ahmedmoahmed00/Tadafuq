import { Link } from "react-router-dom";

const siteMapLinks = [
  { text: "الرئيسية", to: "/" },
  { text: "المعلنون", to: "/advertisers" },
  { text: "الناشرون", to: "/publishers" },
  { text: "الأسعار", to: "/pricing" },
];

function SiteMap() {
  return (
    <div className="flex flex-col gap-8 max-[992px]:-order-1">
      <h4 className="Plex-Sans font-bold text-[#EB5212]">خريطة الموقع</h4>
      <ul className="flex flex-col gap-4 KumbhSans text-[17px]">
        {siteMapLinks.map(({ text, to }, idx) => (
          <li key={idx}>
            <Link className="duration-300 hover:text-[#EB5212]" to={to}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SiteMap;
