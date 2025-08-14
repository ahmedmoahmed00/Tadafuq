import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function InputPassword({
  label,
  value,
  setValue,
  errorValue,
  placeholder,
  id = "password",
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div className="flex flex-col ">
        <label htmlFor={id} className="text-white font-[500] ">
          {label ? label : "كلمة المرور"}
        </label>
        <div className="p-4 mt-4 border flex flex-row-reverse items-center border-[#FFFFFF33] rounded-[70px] ">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            id={id}
            className="h-full w-full Plex-Sans focus:outline-0 font-[400]  text-[#FFFFFF80]"
            type={showPassword ? "text" : "password"}
            placeholder={placeholder ? placeholder : "اكتب كلمة المرور"}
          />
          {showPassword ? (
            <FiEye
              onClick={() => setShowPassword((prev) => !prev)}
              className="cursor-pointer text-[#FFFFFF80]"
              size={20}
            />
          ) : (
            <FiEyeOff
              onClick={() => setShowPassword((prev) => !prev)}
              className="cursor-pointer text-[#FFFFFF80]"
              size={18}
            />
          )}
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

export default InputPassword;
