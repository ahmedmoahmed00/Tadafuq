import BoxQuestions from "../ui/BoxQuestions";
import QuestionOne from "../assets/backgrounds/QuestionsSection/QuestionOne.png";
import QuestionTwo from "../assets/backgrounds/QuestionsSection/QuestionTwo.png";

function QuestionsSection() {
  return (
    <div className="container mb-[147px] max-[992px]:mb-[92px] mt-[150px] max-[992px]:mt-[55px] Plex-Sans ">
      <header className="flex flex-col gap-6 text-center text-white ">
        <h2 className="font-bold text-[40px] max-[992px]:text-[20px]">
          الاسأله المتكرره
        </h2>
        <p className="font-semibold text-[32px] max-[992px]:text-[16px]">
          جميع الاسئلة المتكرره المتعلق بالمعلن و الناشر
        </p>
      </header>
      <div className="grid grid-cols-2 max-[992px]:grid-cols-1 gap-8  mt-[80px] max-[992px]:mt-[24px]">
        <BoxQuestions
          image={QuestionOne}
          mainTitle={"خاص للناشرين"}
          subTitle={
            "كيف يعمل برنامج شبكة تدفق للإعلانات الرقمية بالنسبة للناشر ؟"
          }
          description={
            "تدفق هي شبكة إعلانات رقمية تستهدف الإعلانات المناسبة للمحتوى، بحيث يسمح برنامج الناشر لأصحاب المواقع الإلكترونية.."
          }
        />
        <BoxQuestions
          image={QuestionTwo}
          mainTitle={"خاص للمعلنين"}
          subTitle={"ماهي شبكة تدفق للاعلانات الرقمية ؟"}
          description={
            "تدفق هي شبكة إعلانات رقمية تركز بالدرجة الأولى على منطقة الشرق الأوسط وشمال إفريقيا بقدرات فنية عالمية. مما يعني أنه بإمكان المعلن أن يضع بانرات.."
          }
        />
      </div>
    </div>
  );
}

export default QuestionsSection;
