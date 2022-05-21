import React, { useContext } from "react";
import { Archive, Search, TrashBin } from "react-ionicons";
import { toast } from "react-toastify";
import { DataContext } from "../../context/DataContext";

export const MessagesTopBar = ({ setUpdate, update }) => {
  const {
    state: { messages, messageID },
    dispatch,
  } = useContext(DataContext);

  const search = (e) => {
    dispatch({ messagesSearch: e.target.value });
  };
  const archive = () => {
    if (messageID.length) {
      for (let index = 0; index <= messageID.length; index++) {
        messages.map((item) => {
          if (item.id === messageID[index]) {
            var elementPos = messages
              .map(function (x) {
                return x.id;
              })
              .indexOf(item.id);

            messages.splice(elementPos, 1);
            setUpdate(!update);
          }
          return item;
        });
      }
    } else {
      toast.error("Please select some messages");
    }
  };
  return (
    <div className="w-full flex flex-row items-center gap-4 justify-between mb-5">
      <div className="flex items-center bg-white rounded-[0.5rem] border border-[#d1d5db] w-[200px] md:w-[280px]">
        <div className="bg-white py-2 px-3 flex items-center justify-center rounded-tl-[0.5rem] border-r-2 border-[#d1d5db] rounded-bl-[0.5rem]">
          <Search color={"#9ca3af"} width="20px" height="20px" />
        </div>
        <input
          type="text"
          className="outline-none w-full bg-white rounded-tr-[0.5rem] py-2 px-3 rounded-br-[0.5rem] text-[14px] text-[#3a3a3a]"
          placeholder="Search Names..."
          onChange={(e) => search(e)}
        />
      </div>
      <div className="xl:flex hidden items-center bg-SidebarBg rounded-[0.5rem]">
        <div className="flex items-center">
          <div
            className="flex items-center justify-center cursor-pointer bg-SidebarBg py-3 relative px-4 hover:bg-[#161d27] showToolTip transition-all rounded-tl-[0.5rem] rounded-bl-[0.5rem]"
            onClick={() => archive()}
          >
            <Archive color={"#fff"} width="22px" height="22px" />
            <span className="absolute bottom-[-40px] left-[-5px] px-2 py-1 bg-navItemHover sharpArrow shadow-md text-white font-light rounded-[0.5rem] text-[14px]">
              Archive
            </span>
          </div>
          <div
            className="flex items-center justify-center cursor-pointer bg-SidebarBg py-3 relative px-4 hover:bg-[#161d27] showToolTip transition-all rounded-tr-[0.5rem] rounded-br-[0.5rem]"
            onClick={() => archive()}
          >
            <TrashBin color={"#fff"} width="22px" height="22px" />
            <span className="absolute bottom-[-40px] left-[-5px] px-2 py-1 bg-navItemHover sharpArrow shadow-md text-white font-light rounded-[0.5rem] text-[14px]">
              Delete
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
