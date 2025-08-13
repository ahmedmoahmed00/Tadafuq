import BoxFeares from "../ui/BoxFeares";
import iconOne from "../assets/Images/Icons/iconOne.png";
import iconTwo from "../assets/Images/Icons/iconTwo.png";
import iconThree from "../assets/Images/Icons/iconThree.png";
import iconFour from "../assets/Images/Icons/iconFour.png";
import iconFive from "../assets/Images/Icons/iconFive.png";
import iconSix from "../assets/Images/Icons/iconSix.png";
import iconSeven from "../assets/Images/Icons/iconSeven.png";
import iconEight from "../assets/Images/Icons/iconEight.png";

const contentBoxs = [
  {
    id: 1,
    icon: iconOne,
    content: "طريقة تثبيت وإعدادات سهلة وسريعة .",
  },
  {
    id: 2,
    icon: iconTwo,
    content: "مناسبة للعمل مع مختلف أحجام قطاع الأعمال .",
  },
  {
    id: 3,
    icon: iconThree,
    content: "الشريحة المستهدفة من الجمهور بدقة عالية .",
  },
  {
    id: 4,
    icon: iconFour,
    content: "تحقيق أعلى عوائد استثمارية للإعلانات الرقمية .",
  },
  {
    id: 5,
    icon: iconFive,
    content:
      "النشر في مجموعة محددة من نخبة المواقع الالكترونية ذات المحتوى المميز",
  },
  {
    id: 6,
    icon: iconSix,
    content: "تقنية متطورة للاستهداف الجغرافي المتقدم .",
  },
  {
    id: 7,
    icon: iconSeven,
    content:
      "متوافقة مع معايير وقوالب مشغلات فيديو الإعلانات الرقمية IAB VAST 4.2",
  },
  {
    id: 8,
    icon: iconEight,
    content: "تقنيات متطورة لإزالة والتخلص من طرق التحايل .",
  },
];

function OurFeaturesSection() {
  return (
    <div>
      <div className="container mt-[114px] max-[992px]:mt-[70px]">
        <header className="Plex-Sans flex flex-col gap-6 mb-[100px]">
          <h2 className="font-[700] text-[40px] text-white text-center">
            <span className=" text-[#EB5212]">تدفق</span> خيارك الأول
          </h2>
          <p className="font-[600] text-white text-[32px] text-center ">
            منصة اعلانات رقمية تمكن الأعمال من الوصول إلى
          </p>
        </header>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-7">
          {contentBoxs.map((item) => (
            <BoxFeares key={item.id} icon={item.icon} text={item.content} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default OurFeaturesSection;
