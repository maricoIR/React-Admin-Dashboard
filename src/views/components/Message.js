import StarIcon from "@mui/icons-material/Star";
import { amber } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { EllipsisHorizontal } from "react-ionicons";
import user from "../../assets/images/user.jpg";
import "../styles.css";

const Message = () => {
  return (
    <>
      <div className="w-full flex xl:flex-row flex-col items-start gap-3 xl:items-center justify-between border-b-[0.0625rem] hover:bg-[#f2f4f6] border-tableboder py-4 px-4">
        <div className="xl:flex hidden items-center gap-4">
          <Checkbox className="border border-[#d1d5db]" />
          <Checkbox
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 26 },
              color: "#374151",
              "&.Mui-checked": {
                color: amber[700],
              },
            }}
          />
        </div>
        <div className="flex items-center gap-3">
          <img src={user} className="w-7 h-7 rounded-full cursor-pointer" />
          <span className="font-normal text-tabletext text-[15px] cursor-pointer">
            Roy Smith
          </span>
        </div>
        <span className="font-normal text-tabletext text-[15px] cursor-pointer">
          Long time no see - Can we help you set up email forwarding? We’ve
          noticed you haven’t see ...
        </span>
        <div className="xl:flex hidden items-center gap-6">
          <span className="font-light text-tablered text-[13.5px]">
            11:05 AM
          </span>
          <EllipsisHorizontal color={"#374151"} cssClasses="cursor-pointer" />
        </div>
      </div>
      <div className="w-full flex xl:flex-row flex-col items-start gap-3 xl:items-center justify-between border-b-[0.0625rem] hover:bg-[#f2f4f6] border-tableboder py-4 px-4">
        <div className="xl:flex hidden items-center gap-4">
          <Checkbox className="border border-[#d1d5db]" />
          <Checkbox
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 26 },
              color: "#374151",
              "&.Mui-checked": {
                color: amber[700],
              },
            }}
          />
        </div>
        <div className="flex items-center gap-3">
          <img src={user} className="w-7 h-7 rounded-full cursor-pointer" />
          <span className="font-normal text-tabletext text-[15px] cursor-pointer">
            Roy Smith
          </span>
        </div>
        <span className="font-normal text-tabletext text-[15px] cursor-pointer">
          Long time no see - Can we help you set up email forwarding? We’ve
          noticed you haven’t see ...
        </span>
        <div className="xl:flex hidden items-center gap-6">
          <span className="font-light text-tablered text-[13.5px]">
            11:05 AM
          </span>
          <EllipsisHorizontal color={"#374151"} cssClasses="cursor-pointer" />
        </div>
      </div>
      <div className="w-full flex xl:flex-row flex-col items-start gap-3 xl:items-center justify-between border-b-[0.0625rem] hover:bg-[#f2f4f6] border-tableboder py-4 px-4">
        <div className="xl:flex hidden items-center gap-4">
          <Checkbox className="border border-[#d1d5db]" />
          <Checkbox
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 26 },
              color: "#374151",
              "&.Mui-checked": {
                color: amber[700],
              },
            }}
          />
        </div>
        <div className="flex items-center gap-3">
          <img src={user} className="w-7 h-7 rounded-full cursor-pointer" />
          <span className="font-normal text-tabletext text-[15px] cursor-pointer">
            Roy Smith
          </span>
        </div>
        <span className="font-normal text-tabletext text-[15px] cursor-pointer">
          Long time no see - Can we help you set up email forwarding? We’ve
          noticed you haven’t see ...
        </span>
        <div className="xl:flex hidden items-center gap-6">
          <span className="font-light text-tablered text-[13.5px]">
            11:05 AM
          </span>
          <EllipsisHorizontal color={"#374151"} cssClasses="cursor-pointer" />
        </div>
      </div>
      <div className="w-full flex xl:flex-row flex-col items-start gap-3 xl:items-center justify-between border-b-[0.0625rem] hover:bg-[#f2f4f6] border-tableboder py-4 px-4">
        <div className="xl:flex hidden items-center gap-4">
          <Checkbox className="border border-[#d1d5db]" />
          <Checkbox
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 26 },
              color: "#374151",
              "&.Mui-checked": {
                color: amber[700],
              },
            }}
          />
        </div>
        <div className="flex items-center gap-3">
          <img src={user} className="w-7 h-7 rounded-full cursor-pointer" />
          <span className="font-normal text-tabletext text-[15px] cursor-pointer">
            Roy Smith
          </span>
        </div>
        <span className="font-normal text-tabletext text-[15px] cursor-pointer">
          Long time no see - Can we help you set up email forwarding? We’ve
          noticed you haven’t see ...
        </span>
        <div className="xl:flex hidden items-center gap-6">
          <span className="font-light text-tablered text-[13.5px]">
            11:05 AM
          </span>
          <EllipsisHorizontal color={"#374151"} cssClasses="cursor-pointer" />
        </div>
      </div>
      <div className="w-full flex xl:flex-row flex-col items-start gap-3 xl:items-center justify-between border-b-[0.0625rem] hover:bg-[#f2f4f6] border-tableboder py-4 px-4">
        <div className="xl:flex hidden items-center gap-4">
          <Checkbox className="border border-[#d1d5db]" />
          <Checkbox
            icon={<StarIcon />}
            checkedIcon={<StarIcon />}
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 26 },
              color: "#374151",
              "&.Mui-checked": {
                color: amber[700],
              },
            }}
          />
        </div>
        <div className="flex items-center gap-3">
          <img src={user} className="w-7 h-7 rounded-full cursor-pointer" />
          <span className="font-normal text-tabletext text-[15px] cursor-pointer">
            Roy Smith
          </span>
        </div>
        <span className="font-normal text-tabletext text-[15px] cursor-pointer">
          Long time no see - Can we help you set up email forwarding? We’ve
          noticed you haven’t see ...
        </span>
        <div className="xl:flex hidden items-center gap-6">
          <span className="font-light text-tablered text-[13.5px]">
            11:05 AM
          </span>
          <EllipsisHorizontal color={"#374151"} cssClasses="cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Message;
