function Button({ type, statue, children }) {
  let buttonDesign;

  if (type === "Primary" && statue === "Hover") {
    buttonDesign = `w-[170px]  bg-[#EB5212] text-white
     hover:bg-white hover:text-black duration-300 KumbhSans cursor-pointer h-[50px] rotate-0 opacity-100 rounded-[52px] px-[20px] py-[10px] gap-[6px] flex items-center justify-center font-kumbh font-semibold text-[16px] leading-[16px] tracking-[0px] text-center`;
  }
  if (type === "Secondary" && statue === "Normal") {
    buttonDesign =
      " h-[50px]  w-[170px] py-[10px] px-5 border-[1.4px] cursor-pointer hover:border-white duration-300 border-[#EB5212] font-[600] bg-[linear-gradient(137.34deg,_rgba(7,_4,_43,_0.16)_23.98%,_rgba(112,_113,_122,_0.16)_65.73%)] rounded-[52px] ";
  }

  return <button className={buttonDesign}>{children}</button>;
}

export default Button;
