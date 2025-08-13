import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";

function ContactUs() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  function handelSubmit(e) {
    e.preventDefault();

    setFormValues({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <div className="container rtl  max-[767px]:gap-12 pt-[98px] mt-[100px] mb-[104px] max-[767px]:mb-[99px]">
      <header className="text-center">
        <h1 className="Plex-Sans font-bold text-white text-[40px] max-[767px]:text-[20px]">
          تواصل معنا
        </h1>
      </header>
      <div className="mt-12 max-[767px]:mt-8 max-[767px]:rounded-2xl max-[767px]:p-4 rounded-[48px] p-[60px] border border-[#FFFFFF1A] backdrop-blur-[20px] bg-[linear-gradient(137.34deg,rgba(7,4,43,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)]">
        <form
          onSubmit={handelSubmit}
          className="text-right flex flex-col gap-6"
        >
          <Input
            label={"الاسم"}
            id={"name"}
            placeholder={"اكتب اسمك"}
            value={formValues.name}
            setValue={(val) => handleChange("name", val)}
          />
          <Input
            label={"بريد إلكتروني"}
            id={"email"}
            placeholder={"me@email.com"}
            value={formValues.email}
            setValue={(val) => handleChange("email", val)}
          />
          <div>
            <label htmlFor="message" className="text-white font-[500] ">
              رسالتك
            </label>
            <textarea
              value={formValues.message}
              onChange={(val) => handleChange("message", val.target.value)}
              id="message"
              placeholder="اكتب رسالتك"
              className="mt-4 resize-none overflow-y-auto py-4 pr-4 pb-[156px] w-full  border border-[#FFFFFF33] rounded-[24px] Plex-Sans bg-transparent h-full  focus:outline-0 font-[400]  text-[#FFFFFF80]"
            ></textarea>
          </div>

          <div className="py-6 mx-auto ">
            <Button type={"Primary"} statue={"Normal"}>
              ارسال
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
