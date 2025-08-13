import { useNavigate } from "react-router-dom";
import logo from "../assets/backgrounds/Icons/logo.png";

function Logo() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("home", { replace: true })}>
      <img
        className="max-[992px]:w-[96px] cursor-pointer"
        src={logo}
        alt="Logo Icon"
      />
    </div>
  );
}

export default Logo;
