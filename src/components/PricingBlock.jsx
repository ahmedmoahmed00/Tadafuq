import { HiCheck } from "react-icons/hi2";
import Button from "../ui/Button";

const rows = [
  ["الأسعار (SR)", "2250 SR"],
  ["الأسعار (USD)", "600 USD"],
  ["الحجم", "728x90 PIXEL"],
  ["عدد الظهور", "100,000"],
  ["موقع الاعلان", "جميع المنصات"],
  ["تصميم", "تصميم"],
];

function PricingBlock({ title }) {
  return (
    <div className="Plex-Sans  max-[767px]:rounded-3xl  rounded-[32px] rtl p-8 max-[767px]:p-[14px] backdrop-blur-[10px] text-white bg-[linear-gradient(137.34deg,rgba(7,4,43,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)] border border-white/10 flex flex-col h-full gap-6 max-[767px]:gap-3.5">
      <div className="flex flex-col gap-5 border-b-[4px] border-solid [border-image-source:linear-gradient(90deg,#002661_0%,#063170_100%)] [border-image-slice:1]">
        <h2 className="text-[25px] max-[767px]:text-[20px] font-semibold">
          {title}
        </h2>
        <p className="flex flex-row gap-1 font-[600] max-[767px]:text-[20px] text-[24px] mb-7">
          500
          <span>$</span>
        </p>
      </div>

      <div className=" leading-[140%] font-[400] text-[18px] flex-1">
        {rows.map(([label, value], idx) => (
          <div
            key={idx}
            className="flex justify-between py-[14px] px-[14px] hover:text-[#EB5212] hover:bg-white/1  rounded-[10px]"
          >
            <div className="flex items-center gap-4 ">
              <div className=" relative">
                <span className="w-6 h-6 bg-[#121551] opacity-40 rounded-full flex items-center justify-center"></span>
                <HiCheck
                  size={16}
                  className=" absolute top-1 left-1  font-black"
                />
              </div>
              <span>{label}</span>
            </div>
            <span className=" text-left">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto ">
        <Button type="Secondary" wFull statue="Normal">
          اطلب الآن
        </Button>
      </div>
    </div>
  );
}

export default PricingBlock;
