import RowDigitalConnect from "../ui/RowDigitalConnect";
import ImageDigitalConnectOne from "../assets/Images/DigitalConnect/ImageDigitalConnectOne.png";
import ImageDigitalConnectTwo from "../assets/Images/DigitalConnect/ImageDigitalConnectTwo.png";

const Items = [
  {
    id: 1,
    image: ImageDigitalConnectOne,
    textOne:
      " ضمان المعلن ظهور إعلاناته فقط في نخبة المواقع السعودية وليس في اي مواقع أخرى خارج المملكة أو مواقع احتيالية غير حقيقية .",
    textTwo:
      "  أن يضاعف المعلن عائد الاستثمار على الإعلان للوصول للفئة المستهدفة بدون أي هدر أو مواقع مزيفة.",
    textThree: " استهداف الجمهور في مدينة أو مدن معينة أو نطاق جغرافي محدد.",
  },
  {
    id: 2,

    image: ImageDigitalConnectTwo,
    textOne: " بث جميع أنواع الإعلانات الرقمية سواء بانرات أو فيديو.",
    textTwo:
      " الحصول على تقارير وإحصائيات واضحة ودقيقة عن أداء الحملة الاعلانية.",
    textThree: "وصول الإعلانات إلى المواقع الموثوقة للناشرين من خلال الشبكة.",
  },
];

function DigitalConnect() {
  return (
    <div className="mt-[150px] max-[992px]:mt-[70px] container">
      <header className="mb-[70px]">
        <h2 className="Plex-Sans font-[600] max-[992px]:text-[20px] text-[32px] text-center text-white">
          مع شبكة تدفق للاعلانات الرقمية يمكنك
        </h2>
      </header>

      <div className="flex gap-[70px] flex-col">
        <RowDigitalConnect item={Items[0]} />
        <RowDigitalConnect rowReverse={true} item={Items[1]} />
      </div>
    </div>
  );
}

export default DigitalConnect;
