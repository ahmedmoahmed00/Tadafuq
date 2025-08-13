import { useNavigate } from "react-router-dom";
import GroupHerosection from "../assets/backgrounds/imgHerosection/GroupHerosection.svg";
import Button from "../ui/Button";

function Herosection() {
  const navigate = useNavigate();

  return (
    <div className="container max-[992px]:mt-[82px] mt-[87px] pt-[98px]     ">
      <div className="flex items-center justify-between max-[992px]:flex-col max-[992px]:gap-12">
        <div>
          {/* <img  
            src={GroupHerosection}
            alt="Herosection"
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto", maxWidth: "1200px" }}
          /> */}
        </div>
        <div className="rtl">
          <div className="Plex-Sans max-w-[648px] flex flex-col gap-10 text-white">
            <p className="font-[700] text-[20px] max-[992px]:text-[16px]">
              مرحبًا بكم في شبكة تدفق الإعلانات الرقمية
            </p>
            <h1 className="text-[32px] font-[900] max-[992px]:text-[20px]">
              أول شبكة إعلانات رقمية سعودية في منطقة الشرق الأوسط وشمال افريقيا
              حيث تعمل الشبكة فقط مع نخبة الناشرين والمواقع الالكترونية الموثوقة
            </h1>
            <div>
              <Button
                type="Secondary"
                statue="Normal"
                onClick={() => navigate("/contactus", { replace: true })}
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
