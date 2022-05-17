import BarChart from "./BarChart";

const Stats = () => {
  return (
    <div className="w-full flex items-center justify-between lg:flex-row flex-col gap-5">
      <div className="bg-white rounded-[0.5rem] flex lg:flex-row flex-col items-center justify-center lg:w-[32%] gap-7 w-full Bshadow lg:h-[160px] h-auto border py-[1.25rem] px-[1.5rem]">
        <BarChart />
      </div>
      <div className="bg-white rounded-[0.5rem] flex lg:flex-row flex-col items-center lg:w-[32%] gap-7 w-full Bshadow lg:h-[160px] h-auto border py-[1.25rem] px-[1.5rem]">
        <BarChart />
      </div>
      <div className="bg-white rounded-[0.5rem] flex lg:flex-row flex-col items-center lg:w-[32%] gap-7 w-full Bshadow lg:h-[160px] h-auto border py-[1.25rem] px-[1.5rem]">
        <BarChart />
      </div>
    </div>
  );
};

export default Stats;
