import { useEffect, useRef, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Login from "./Login";
import HeaderNav from "./HeaderNav";
import { useOutsideClick } from "../hooks/useOutsideClick";

function Menu() {
  const [open, setOpen] = useState(false);

  const ref = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && ref.current.contains(e.target)) return;

      if (buttonRef.current && buttonRef.current.contains(e.target)) return;

      if (e.target.closest("[data-ignore-outsideclick]")) return;

      setOpen(false);
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return (
    <div className="min-[991px]:hidden">
      <button
        ref={buttonRef}
        onClick={() => {
          setOpen((open) => !open);
        }}
        aria-label="Toggle menu"
        className="text-3xl text-white p-2 focus:outline-none cursor-pointer"
      >
        <FiMenu />
      </button>

      {open && (
        <div
          ref={ref}
          className="absolute left-0 top-[70px] rounded-2xl w-full backdrop-blur-[40px] bg-[linear-gradient(137.34deg,rgba(7,4,43,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)] p-5 z-50"
        >
          <Login className={"flex justify-center mb-4"} />
          <HeaderNav className={"flex-col-reverse max-[992px]:gap-3 "} />
        </div>
      )}
    </div>
  );
}

export default Menu;
