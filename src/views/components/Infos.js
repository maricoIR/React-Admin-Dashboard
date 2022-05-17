import Canada from "../../assets/images/canada.svg";
import Germany from "../../assets/images/germany.svg";
import France from "../../assets/images/france.svg";
import Italy from "../../assets/images/itly.svg";
import Sweeden from "../../assets/images/sweeden.svg";
import Netherlands from "../../assets/images/netherlands.svg";
import Us from "../../assets/images/us.svg";

const Infos = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col items-center justify-between mt-12">
      <div className="bg-white relative rounded-[0.5rem] flex flex-col items-start lg:w-[48%] gap-7 w-full Bshadow lg:h-[380px] h-auto border py-[1.25rem] mb-5">
        <div className="w-full flex flex-col items-start gap-3">
          <div className="w-full flex items-center justify-between">
            <span className="text-[17px] text-boxText font-normal ml-6">
              Events
            </span>
            <span className="text-[14px] text-barColor font-normal mr-6 cursor-pointer">
              view all
            </span>
          </div>
          <span className="w-full h-[0.0625rem] bg-[#e5e7eb]"></span>
        </div>
        <div className="w-fit flex items-center gap-6 ml-6 mb-4">
          <div className="flex w-[3.125rem] leading-[1] flex-col text-center rounded-[0.5rem]">
            <span className="bg-[#e11d48] text-white rounded-tl-[0.5rem] rounded-tr-[0.5rem] p-[0.275rem] text-sm font-medium">
              May
            </span>
            <span className="text-[1.1rem] text-center text-[#1f2937] font-medium py-[10px] bg-[#f2f4f6] rounded-bl-[0.5rem] rounded-br-[0.5rem]">
              17
            </span>
          </div>
          <div className="w-fit flex items-start flex-col gap-1">
            <span className="text-[1.15rem] text-boxText font-normal mb-1">
              Newmarket Nights
            </span>
            <span className="text-[#262b40] text-[12px] font-normal">
              Organized by University of Oxford
            </span>
            <span className="text-[#262b40] text-[12px] font-normal">
              Time: 20:00 PM
            </span>
            <span className="text-[#262b40] text-[12px] font-normal">
              Place: Cambridge Boat Club, Cambridge
            </span>
          </div>
        </div>
        <div className="w-fit flex items-center gap-6 ml-6">
          <div className="flex w-[3.125rem] leading-[1] flex-col text-center rounded-[0.5rem]">
            <span className="bg-[#e11d48] text-white rounded-tl-[0.5rem] rounded-tr-[0.5rem] p-[0.275rem] text-sm font-medium">
              Feb
            </span>
            <span className="text-[1.1rem] text-center text-[#1f2937] font-medium py-[10px] bg-[#f2f4f6] rounded-bl-[0.5rem] rounded-br-[0.5rem]">
              23
            </span>
          </div>
          <div className="w-fit flex items-start flex-col gap-1">
            <span className="text-[1.15rem] text-boxText font-normal mb-1">
              Newmarket Nights
            </span>
            <span className="text-[#262b40] text-[12px] font-normal">
              Organized by University of Oxford
            </span>
            <span className="text-[#262b40] text-[12px] font-normal">
              Time: 20:00 PM
            </span>
            <span className="text-[#262b40] text-[12px] font-normal">
              Place: Cambridge Boat Club, Cambridge
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white relative mb-5 rounded-[0.5rem] flex flex-col items-start lg:w-[48%] gap-7 w-full Bshadow lg:h-[380px] h-auto border py-[1.25rem]">
        <div className="w-full flex flex-col items-start gap-3">
          <div className="w-full flex items-center justify-between">
            <span className="text-[17px] text-boxText font-normal ml-6">
              Past 30 days visits by Country
            </span>
            <span className="text-[14px] text-barColor font-normal mr-6 cursor-pointer">
              view all
            </span>
          </div>
          <span className="w-full h-[0.0625rem] bg-[#e5e7eb]"></span>
        </div>
        <div className="w-full flex items-center gap-4 px-9 mt-2">
          <img src={Germany} alt="contrty" className="w-[26px] h-[26px] mt-2" />
          <div className="w-full flex flex-col items-start gap-2">
            <span>Germany</span>
            <div className="w-[85%] bg-rose-100 h-[5px] rounded-full relative">
              <span className="absolute bg-barColor w-[50%] h-[5px] rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-4 px-9">
          <img src={Canada} alt="contrty" className="w-[26px] h-[26px] mt-2" />
          <div className="w-full flex flex-col items-start gap-2">
            <span>Canada</span>
            <div className="w-[85%] bg-rose-100 h-[5px] rounded-full relative">
              <span className="absolute bg-barColor w-[85%] h-[5px] rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-4 px-9">
          <img src={Us} alt="contrty" className="w-[26px] h-[26px] mt-2" />
          <div className="w-full flex flex-col items-start gap-2">
            <span>United States</span>
            <div className="w-[85%] bg-rose-100 h-[5px] rounded-full relative">
              <span className="absolute bg-barColor w-[35%] h-[5px] rounded-full"></span>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-4 px-9">
          <img
            src={Netherlands}
            alt="contrty"
            className="w-[26px] h-[26px] mt-2"
          />
          <div className="w-full flex flex-col items-start gap-2">
            <span>Netherlands</span>
            <div className="w-[85%] bg-rose-100 h-[5px] rounded-full relative">
              <span className="absolute bg-barColor w-[63%] h-[5px] rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;
