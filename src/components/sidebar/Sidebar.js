import reactIcon from "../../assets/images/reactIcon.png";
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { NavLink } from "react-router-dom";
import {
  StatsChart,
  People,
  Card,
  Settings,
  Grid,
  LogOut,
  MailUnread,
} from "react-ionicons";
import "./styles.css";

const Sidebar = () => {
  const {
    state: { sidebarToggle, activePage },
  } = useContext(DataContext);
  return (
    <div
      className={`h-full fixed top-0 left-0 ${
        sidebarToggle ? `w-[260px] sidebarOpen` : `w-[95px] sidebarClosed`
      } flex flex-col items-center gap-1 py-4 px-6 bg-SidebarBg transition-all duration-[400ms]	`}
    >
      <a href="https://github.com/maricoIR" target="_blank" className="w-full">
        <div
          className={`flex items-center justify-center gap-2 w-full cursor-pointer transition-all hover:bg-navItemHover p-[10px] rounded-[0.5rem]`}
        >
          <img src={reactIcon} alt="logo" className="w-5 h-5" />
          <span className="text-navText w-full font-light navItem">
            My Github
          </span>
        </div>
      </a>
      <NavLink to="/" className="w-full">
        <div
          className={`${
            activePage == `Dashboard` && `bg-navItemHover`
          } flex items-center justify-center gap-2 w-full cursor-pointer transition-all hover:bg-navItemHover p-[10px] rounded-[0.5rem]`}
        >
          <StatsChart color={"#9ca3af"} width="19px" height="19px" />
          <span className="text-navText w-full font-light navItem mt-1">
            Dashboard
          </span>
        </div>
      </NavLink>
      {/* <NavLink to="/tasks" className="w-full"> */}
      <div
        className={`${
          activePage == `Tasks` && `bg-navItemHover`
        } flex items-center justify-center gap-2 w-full cursor-pointer transition-all hover:bg-navItemHover p-[10px] rounded-[0.5rem]`}
      >
        <Grid color={"#9ca3af"} width="19px" height="19px" />
        <span className="text-navText w-full font-light navItem">Tasks</span>
      </div>
      {/* </NavLink> */}
      <div
        className={`${
          activePage == `Messages` && `bg-navItemHover`
        } flex items-center justify-center gap-2 w-full cursor-pointer transition-all hover:bg-navItemHover p-[10px] rounded-[0.5rem]`}
      >
        <MailUnread
          color={"#9ca3af"}
          width="19px"
          height="19px"
          cssClasses="path-red"
        />
        <span className="text-navText w-full font-light navItem">Messages</span>
      </div>
      <div
        className={`${
          activePage == `Users` && `bg-navItemHover`
        } flex items-center justify-center gap-2 w-full cursor-pointer transition-all hover:bg-navItemHover p-[10px] rounded-[0.5rem]`}
      >
        <People color={"#9ca3af"} width="19px" height="19px" />
        <span className="text-navText w-full font-light navItem">Users</span>
      </div>
      <div
        className={`${
          activePage == `Orders` && `bg-navItemHover`
        } flex items-center justify-center gap-2 w-full cursor-pointer transition-all hover:bg-navItemHover p-[10px] rounded-[0.5rem]`}
      >
        <Card color={"#9ca3af"} width="19px" height="19px" />
        <span className="text-navText w-full font-light navItem">Orders</span>
      </div>
      <div
        className={`${
          activePage == `Settings` && `bg-navItemHover`
        } flex items-center justify-center gap-2 w-full cursor-pointer transition-all hover:bg-navItemHover p-[10px] rounded-[0.5rem]`}
      >
        <Settings color={"#9ca3af"} width="19px" height="19px" />
        <span className="text-navText w-full font-light navItem">Settings</span>
      </div>
      <div
        className={`flex items-center justify-center gap-2 w-full cursor-pointer transition-all hover:bg-navItemHover p-[10px] rounded-[0.5rem]`}
      >
        <LogOut color={"#9ca3af"} width="19px" height="19px" />
        <span className="text-navText w-full font-light navItem">Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;
