import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import StarIcon from "@mui/icons-material/Star";
import { amber } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import { EllipsisHorizontal } from "react-ionicons";
import "../styles.css";

const MessagesTable = ({ currentPage, msgPerPage }) => {
  const {
    state: { messages },
    dispatch,
  } = useContext(DataContext);

  const lastMsg = currentPage * msgPerPage;
  const firstMsg = lastMsg - msgPerPage;
  const currentMessages = messages.slice(firstMsg, lastMsg);

  return (
    <div className="w-full bg-white rounded-[0.5rem] Tshadow flex flex-col mb-6">
      {currentMessages.map((item) => (
        <div
          key={item.id}
          className="w-full flex xl:flex-row flex-col items-start gap-3 xl:items-center justify-between border-b-[0.0625rem] hover:bg-[#f2f4f6] border-tableboder py-4 px-4"
        >
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
            <img
              src={item.image}
              className="w-7 h-7 rounded-full cursor-pointer"
            />
            <span className="font-normal text-tabletext text-[15px] cursor-pointer">
              {item.name}
            </span>
          </div>
          <span className="font-normal text-tabletext text-[15px] cursor-pointer">
            {item.message}
          </span>
          <div className="xl:flex hidden items-center gap-6">
            <span className="font-light text-tablered text-[13.5px]">
              {item.time}
            </span>
            <EllipsisHorizontal color={"#374151"} cssClasses="cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesTable;
