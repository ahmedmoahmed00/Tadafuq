function RowDigitalConnect({ item, rowReverse }) {
  return (
    <div
      className={` flex items-center gap-12 ${
        rowReverse ? "max-[992px]:flex-col-reverse" : "max-[992px]:flex-col"
      } `}
    >
      {!rowReverse && (
        <div className="max-[992px]:w-full">
          <img
            className="rounded-[26px] max-[992px]:w-full  shadow-[0_0_0_10px_rgba(182,182,182,0.12),0_0_0_20px_rgba(209,209,209,0.12)]"
            src={item.image}
            alt="Image"
          />
        </div>
      )}
      <div>
        <div className="pr-7">
          <ul className="flex flex-col list-disc max-[992px]:text-[18px] max-w-[596px] gap-8 text-[25px] leading-[47px] text-white Plex-Sans">
            <li className=" ">
              <p className=" ">{item.textOne} </p>
            </li>
            <li className=" ">
              <p>{item.textTwo}</p>
            </li>

            <li className=" ">
              <p>{item.textThree}</p>
            </li>
          </ul>
        </div>
      </div>
      {rowReverse && (
        <div className="max-[992px]:w-full">
          <img
            className="rounded-[26px] max-[992px]:w-full shadow-[0_0_0_10px_rgba(182,182,182,0.12),0_0_0_20px_rgba(209,209,209,0.12)]"
            src={item.image}
            alt="Image"
          />
        </div>
      )}
    </div>
  );
}

export default RowDigitalConnect;
