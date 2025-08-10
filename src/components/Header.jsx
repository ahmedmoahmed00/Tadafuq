import Logo from "../ui/Logo";
import HeaderNav from "./HeaderNav";
import Login from "./Login";
import Menu from "./Menu";

function Header() {
  // const lides = "";

  return (
    <header className=" min-[992px]:backdrop-blur-xl  min-[992px]:fixed top-0 left-0 right-0 z-50 bg-[#0C171524] p-6 ">
      <div className="container relative flex justify-between items-center">
        <Menu />
        <Login className={"max-[992px]:hidden"} />
        <HeaderNav className={"max-[992px]:hidden"} />
        <Logo />
      </div>
    </header>
  );
}

export default Header;
