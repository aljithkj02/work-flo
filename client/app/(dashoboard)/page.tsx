import { QuestionMark } from "@/assets/QuestionMark";
import { Advertisement } from "@/components/home/Advertisement";

export default function Home() {

  return (
    <div >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[40px] font-semibold">Good morning, Joe!</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer">
          <p className="text-[#080808] text-[15px]">Help & feedback</p>
          <QuestionMark />
        </div>
      </div>

      <Advertisement />
    </div>
  );
}
