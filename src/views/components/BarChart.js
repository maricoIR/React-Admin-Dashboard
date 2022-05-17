import { CalendarClear } from "react-ionicons";
import { ChevronUp } from "react-ionicons";

const BarChart = () => {
  return (
    <>
      <div className="w-fit h-full flex items-center gap-7">
        <div className="bg-[#f2f4f6] h-full w-[6.5px] rounded-md relative">
          <div className="absolute bottom-0 w-[6.5px] h-[85%] bg-barColor rounded-md"></div>
        </div>
        <div className="bg-[#f2f4f6] h-full w-[6.5px] rounded-md relative">
          <div className="absolute bottom-0 w-[6.5px] h-[75%] bg-barColor rounded-md"></div>
        </div>
        <div className="bg-[#f2f4f6] h-full w-[6.5px] rounded-md relative">
          <div className="absolute bottom-0 w-[6.5px] h-[80%] bg-barColor rounded-md"></div>
        </div>
        <div className="bg-[#f2f4f6] h-full w-[6.5px] rounded-md relative">
          <div className="absolute bottom-0 w-[6.5px] h-[60%] bg-barColor rounded-md"></div>
        </div>
        <div className="bg-[#f2f4f6] h-full w-[6.5px] rounded-md relative">
          <div className="absolute bottom-0 w-[6.5px] h-[58%] bg-barColor rounded-md"></div>
        </div>
        <div className="bg-[#f2f4f6] h-full w-[6.5px] rounded-md relative">
          <div className="absolute bottom-0 w-[6.5px] h-[33%] bg-barColor rounded-md"></div>
        </div>
      </div>
      <div className="flex flex-col items-center xl:items-start text-center w-full">
        <span className="text-boxText text-[18px] font-light">Revenue</span>
        <span className="text-boxText text-[24px] font-bold mb-2">$43,594</span>
        <div className="flex items-center gap-2 mb-2">
          <CalendarClear width="14px" height="14px" color={"#9ca3af"} />
          <span className="text-boxText text-[0.83rem] font-light mt-[2px]">
            Feb 1 - Apr 1
          </span>
        </div>
        <div className="flex items-center gap-1">
          <ChevronUp width="16px" height="16px" color={"#10b981"} />
          <span className="text-textGreen text-[0.83rem] font-semibold">
            18.2%
          </span>
        </div>
      </div>
    </>
  );
};

export default BarChart;
