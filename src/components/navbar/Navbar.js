import { Menu } from "react-ionicons";
import { Notifications } from "react-ionicons";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import AccountMenu from "./AccountMenu";
import { HelpCircleOutline } from "react-ionicons";

const Navbar = () => {
  const {
    state: { sidebarToggle, hint },
    dispatch,
  } = useContext(DataContext);
  return (
    <div className="w-full flex items-center justify-between pt-3 mb-5">
      <span
        className="hover:bg-[#d1d5db] cursor-pointer transition-all rounded-[0.5rem] h-[2.575rem] w-[2.575rem] flex items-center justify-center"
        onClick={() => dispatch({ sidebarToggle: !sidebarToggle })}
      >
        <Menu color={"#374151"} width="32px" height="32px" />
      </span>
      <div className="flex items-center gap-5">
        {/* {hint && (
          <div className="flex items-center gap-2 border-gray-300 cursor-pointer rounded-full border px-2 py-1">
            <HelpCircleOutline />
            <span className="text-boxText font-normal text-sm">Help</span>
          </div>
        )} */}
        <Notifications
          color={"#374151"}
          width="28px"
          height="28px"
          cssClasses="cursor-pointer"
        />
        <AccountMenu />
      </div>
    </div>
  );
};

export default Navbar;
