import { Menu } from "react-ionicons";
import { Notifications } from "react-ionicons";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

const Navbar = () => {
  const {
    state: { sidebarToggle },
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
      <Notifications
        color={"#374151"}
        width="28px"
        height="28px"
        cssClasses="cursor-pointer"
      />
    </div>
  );
};

export default Navbar;
