import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

function Accordion({ data }) {
  const [itemActive, setItemActive] = useState(null);

  const toggleItem = (index) => {
    itemActive === index ? setItemActive(null) : setItemActive(index);
  };

  return (
    <div className="p-12 max-[767px]:p-4 flex flex-col rounded-4xl backdrop-blur-[30px] bg-[linear-gradient(137.34deg,rgba(7,4,43,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)]">
      {data.map((item, index) => (
        <div
          key={index}
          className="border-b border-[#FAFAFA]/30  last:border-b-0 flex flex-col gap-[14px] last:pb-0 first:pt-0 py-6 max-[767px]:py-4 overflow-hidden"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <h2 className="text-white w-[80%] font-bold text-[21px] max-[767px]:text-[16px]">
              {item.title}
            </h2>
            <div className="w-[35px] h-[35px] flex justify-center items-center rounded-[8px] bg-[#FFFFFF12] ring-1 ring-[#2D2E48]">
              {itemActive === index ? (
                <FiMinus size={24} className="text-[#EB5212]" />
              ) : (
                <FiPlus size={24} className="text-[#EB5212]" />
              )}
            </div>
          </div>

          <div
            className={`max-w-[896px] max-[767px]:text-[15px] Inter leading-[30px] text-[18px] font-[400] text-white opacity-0 transition-all duration-1000 ease-in-out ${
              itemActive === index
                ? "max-h-[99999px] opacity-80"
                : "max-h-0 opacity-0"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
