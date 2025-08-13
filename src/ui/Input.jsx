function Input({ label, id, placeholder, value, setValue, errorValue }) {
  return (
    <>
      <div className="flex flex-col ">
        <label htmlFor={id} className="text-white font-[500] ">
          {label}
        </label>
        <div className="p-4 mt-4 border border-[#FFFFFF33] rounded-[70px] ">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id={id}
            className="Plex-Sans bg-transparent h-full w-full focus:outline-0 font-[400]  text-[#FFFFFF80]"
            type="text"
            placeholder={placeholder}
          />
        </div>
        {errorValue && (
          <p className="text-sm text-right mt-3 mr-3 text-red-700 font-medium">
            {errorValue}
          </p>
        )}
      </div>
    </>
  );
}

export default Input;
