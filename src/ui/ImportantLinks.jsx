import { Link } from "react-router-dom";

function ImportantLinks() {
  return (
    <div className="max-[992px]:-order-1">
      <div className="flex flex-col gap-8">
        <h4 className="Plex-Sans font-bold text-[#EB5212]">روابط تهمك</h4>
        <ul className="KumbhSans flex flex-col gap-[20px]">
          <li className="duration-300 hover:text-[#EB5212]">
            <Link to={"/terms"}>الشروط والأحكام</Link>
          </li>

          <li className="duration-300 hover:text-[#EB5212]">
            <Link to={"/privacy"}>سياسة الخصوصية</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ImportantLinks;
