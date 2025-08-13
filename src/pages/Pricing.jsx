import PricingBlock from "../components/PricingBlock";
import TermsNotes from "../ui/TermsNotes";

function Pricing() {

  return (
    <div className="container flex flex-col gap-[100px] pt-[98px] mt-[100px] mb-[100px] text-white">
      <header className="text-center font-bold flex flex-col gap-12">
        <h1 className="Plex-Sans  text-[40px]">الأسعار</h1>
        <p className="text-[20px]">
          يمكنك العثور على جميع الأسعار الخاصة بالناشرين هنا
        </p>
      </header>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
        <PricingBlock title={"شو كيس (صندوق)"} />
        <PricingBlock title={"بنر اعلى الصفحة الرئيسية"} />
        <PricingBlock title={"بنر وسط الصفحة الرئيسية"} />
      </div>
      <TermsNotes />
    </div>
  );
}

export default Pricing;
