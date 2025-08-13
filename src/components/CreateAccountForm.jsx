import { useState } from "react";
import Input from "../ui/Input";
import Checkbox from "../ui/Checkbox";
import Button from "../ui/Button";
import InputPassword from "../ui/InputPassword";

function CreateAccountForm() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (field, value) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const [formErrors, setFormErrors] = useState({});

  function handelForm(e) {
    e.preventDefault();

    const errors = {};

    if (!formValues.firstName.trim()) {
      errors.firstName = "يرجي إدخال الاسم الأول";
    }

    if (!formValues.lastName.trim()) {
      errors.lastName = "يرجي إدخال اسم العائلة";
    }

    if (!formValues.email.trim()) {
      errors.email = "يرجي إدخال البريد الإلكتروني";
    } else if (
      !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
        formValues.email
      )
    ) {
      errors.email = "صيغة البريد الإلكتروني غير صحيحة";
    }

    if (!formValues.password.trim()) {
      errors.password = "يرجي إدخال كلمة المرور";
    } else if (formValues.password.length < 8) {
      errors.password = "كلمة المرور يجب أن تكون على الأقل 8 أحرف";
    }

    if (formValues.confirmPassword !== formValues.password) {
      errors.confirmPassword = "كلمة المرور غير متطابقة";
    }

    setFormErrors(errors);
  }

  return (
    <form onSubmit={handelForm}>
      <div className="flex flex-col gap-6">
        <header>
          <h2 className="Plex-Sans font-bold text-white text-[24px] text-center">
            إنشاء حساب
          </h2>
        </header>
        <div className="flex gap-6 rtl max-[676px]:flex-col">
          <Input
            id={"firstName"}
            label={"الاسم الأول"}
            placeholder={"اكتب اسمك"}
            value={formValues.firstName}
            setValue={(val) => handleChange("firstName", val)}
            errorValue={formErrors.firstName}
          />
          <Input
            id={"lastName"}
            label={"اسم العائلة"}
            placeholder={"اكتب اسم العائلة"}
            value={formValues.lastName}
            setValue={(val) => handleChange("lastName", val)}
            errorValue={formErrors.lastName}
          />
        </div>
        <Input
          id={"email"}
          label={"بريد إلكتروني"}
          placeholder={"me@email.com"}
          value={formValues.email}
          setValue={(val) => handleChange("email", val)}
          errorValue={formErrors.email}
        />
        <InputPassword
          value={formValues.password}
          setValue={(val) => handleChange("password", val)}
          errorValue={formErrors.password}
        />
        <InputPassword
          label={"تأكيد كلمة المرور"}
          value={formValues.confirmPassword}
          setValue={(val) => handleChange("confirmPassword", val)}
          errorValue={formErrors.confirmPassword}
          placeholder="أعد كتابة كلمة المرور"
        />
        <Checkbox label=" أوافق على سياسة الخصوصية." id={"agree"} />
        <Checkbox label=" التسجيل في النشرة الإخبارية ." id={"signin"} />

        <div className="m-auto">
          <Button type={"Primary"} statue={"Hover"}>
            إنشاء حساب
          </Button>
        </div>
      </div>
    </form>
  );
}

export default CreateAccountForm;
