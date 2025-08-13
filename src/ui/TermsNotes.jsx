const adsRules = [
  "يتم إضافة ضريبة القيمة المضافة إلى كل إعلان.",
  "الأسعار مبينة بالريال السعودي.",
  "أقصر مدة للإعلانات 7 أيام وللظهور 100 ألف.",
  "أن لا يتجاوز حجم القطعة المصممة 50 كيلو بايت",
  "يتحمل المعلن كامل المسؤولية القانونية عن إعلانه والصفحات المرتبطة به.",
  "أن يكون الإعلان مصمماً بشكل احترافي، وخالي من الصور غير اللائقة.",
  "يحق لإدارة موقع الرياض اليومي رفض أي إعلان يعرض ذلك تراه الإدارة غير مناسب",
  "يمكنك إرسال الإعلان بصيغة (swf) أو (gif).",
];

function TermsNotes() {
  return (
    <div className="p-8 flex flex-col gap-8 rtl rounded-2xl KumbhSans backdrop-blur-[10px] bg-[linear-gradient(137.34deg,rgba(7,4,43,0.16)_23.98%,rgba(112,113,122,0.16)_65.73%)] border border-white/10">
      <header>
        <h2 className=" font-semibold leading-[22px] text-[24px]">
          الشروط والملاحظات:
        </h2>
      </header>
      <div className="pb-5">
        <ul className="list-disc max-[767px]:leading-8 leading-10 font-[400] max-[767px]:text-[16px] text-[20px] list-inside pr-5 flex flex-col  opacity-90">
          {adsRules.map((item, index) => (
            <li key={index}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TermsNotes;
