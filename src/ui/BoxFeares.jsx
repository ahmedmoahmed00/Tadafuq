function BoxFeares({ icon, text }) {
  return (
    <div className="p-[32px] h-[220px] backdrop-blur-[10px] rtl border-gradient rounded-[28px] flex flex-col gap-6  bg-[linear-gradient(137.34deg,rgba(7,4,43,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)]">
      <img className="mx-auto" src={icon} alt="Icon" />
      <div className="Plex-Sans text-[20px] font-[400] text-white text-center max-[676px]:text-[16px]">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default BoxFeares;
