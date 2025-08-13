import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import InputPassword from "../ui/InputPassword";
import Checkbox from "../ui/Checkbox";

function LoginForm({ onSwitch }) {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [errorMassageEmail, setErrorMassageEmail] = useState("");
  const [errorMassagePassword, setErrorMassagePassword] = useState("");

  function handelSubmit(e) {
    e.preventDefault();

    if (!emailValue.trim()) {
      setErrorMassageEmail("يرجي إدخال البريد الإلكتروني");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
      setErrorMassageEmail("صيغة البريد الإلكتروني غير صحيحة");
    }

    if (!passwordValue.trim()) {
      setErrorMassagePassword("يرجي إدخال كلمة المرور");
    } else if (passwordValue.length < 8) {
      setErrorMassagePassword("كلمة المرور يجب أن تكون على الأقل 8 أحرف");
    }
  }

  return (
    <form onSubmit={handelSubmit}>
      <header className="mb-6">
        <h2 className="Plex-Sans text-white text-[24px] font-bold text-center">
          تسجيل الدخول
        </h2>
      </header>

      <div className="flex flex-col gap-6 ">
        <Input
          label={"بريد إلكتروني"}
          id={"email"}
          placeholder={"me@email.com"}
          value={emailValue}
          setValue={setEmailValue}
          errorValue={errorMassageEmail}
        />
        <InputPassword
          value={passwordValue}
          setValue={setPasswordValue}
          errorValue={errorMassagePassword}
        />
        <div className="flex items-center gap-1 text-left Plex-Sans text-[14px] text-[#EB5212]">
          <button
            onClick={() => onSwitch()}
            className=" cursor-pointer hover:text-white duration-200"
          >
            إنشاء حساب
          </button>
          <button className="cursor-pointer hover:text-white duration-200">
            نسيت كلمة المرور؟
          </button>
        </div>
      </div>
      <div className="mb-6 max-[767px]:mb-4">
        <Checkbox label="تذكرني" id={"remind"} />
      </div>

      <div className="text-center justify-center flex">
        <Button type={"Primary"} statue={"Hover"}>
          التسجيل
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
