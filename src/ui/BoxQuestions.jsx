import Button from "./Button";

function BoxQuestions({ image, mainTitle, subTitle, description, onClick }) {
  return (
    <div className="border backdrop-blur-[10px] overflow-hidden rounded-[24px] rounded-tl-[14px] rounded-tr-[14px] border-[#FFFFFF1A] bg-[linear-gradient(137.34deg,rgba(7,4,43,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)]">
      <div className=" relative overflow-hidden ">
        <span className=" absolute left-0 w-full h-full bg-[#00041680]"></span>
        <img className="w-full" loading="lazy" src={image} alt="Question One" />
        <span className="absolute top-1/2 left-1/2 z-50 max-[992px]:w-[144px] text-white font-bold text-[40px] transform w-full text-center -translate-x-1/2 -translate-y-1/2">
          {mainTitle}
        </span>
      </div>
      <div className="rtl mt-6 flex flex-col gap-6  text-white p-6">
        <h3 className=" font-semibold text-[20px]">{subTitle}</h3>
        <p className="KumbhSans text-[17px] font-normal opacity-[90%] leading-[26px]">
          {description}
        </p>
        <Button type={"Secondary"} statue={"Normal"} onClick={onClick}>
          المزيد
        </Button>
      </div>
    </div>
  );
}

export default BoxQuestions;
