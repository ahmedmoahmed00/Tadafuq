function Button({ type, statue, children, onClick, wFull }) {
  const baseClasses = `rounded-[52px] cursor-pointer flex items-center justify-center font-semibold transition duration-300`;

  const widthClass = wFull ? "w-full" : "";

  const variants = {
    Primary: {
      Normal: `bg-[#EB5212] text-white backdrop-blur-[48px] w-[201px] h-[60px] py-[10px] px-[20px] KumbhSans`,
      Hover: `bg-[#EB5212] text-white w-[170px] h-[50px] px-[20px] py-[10px] gap-[6px] KumbhSans font-kumbh font-semibold text-[16px] leading-[16px] tracking-[0px] text-center
              hover:bg-white hover:text-black opacity-100 rotate-0 rounded-[52px]`,
    },
    Secondary: {
      Normal: `h-[50px] w-[170px] py-[10px] px-5 border-[1.4px] border-[#EB5212] font-[600]
               bg-[linear-gradient(137.34deg,rgba(7,4,43,0.16) 23.98%,rgba(112,113,122,0.16) 65.73%)]
               rounded-[52px] hover:border-white`,
    },
  };

  const buttonDesign = `${baseClasses} ${widthClass} ${
    variants[type]?.[statue] || ""
  }`;

  return (
    <button className={buttonDesign} onClick={() => onClick && onClick()}>
      {children}
    </button>
  );
}

export default Button;
