import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Login from "./Login";
import HeaderNav from "./HeaderNav";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-[991px]:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="text-3xl text-white p-2 focus:outline-none cursor-pointer"
      >
        <FiMenu />
      </button>

      {open && (
        <div className="absolute w-full bg-[#0C171524] p-5 z-50">
          <Login className={"flex justify-center mb-4"} />
          <HeaderNav className={"flex-col-reverse max-[992px]:gap-3"} />
        </div>
      )}
    </div>
  );
}

export default Menu;
