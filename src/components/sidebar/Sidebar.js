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
import "./Sidebarstyles.css";

const Sidebar = () => {
  const {
    state: { sidebarToggle, activePage },
  } = useContext(DataContext);
  return (
    <>
      <div className={`sidebar ${sidebarToggle && `active`}`}>
        <ul className="nav_list">
          <li>
            <a href="https://github.com/maricoIR" target="_blank">
              <img src={reactIcon} alt="logo" className="w-5 h-5" />
              <span className="links_name">My Github</span>
            </a>
            <span className="tooltip">My Github</span>
          </li>
          <li>
            <NavLink
              to="/"
              className={`w-full ${
                activePage == `Dashboard` && `bg-navItemHover`
              }`}
            >
              <StatsChart color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Dashboard</span>
            </NavLink>
            <span className="tooltip">Dashboard</span>
          </li>
          <li>
            <NavLink
              to="/messages"
              className={`w-full ${
                activePage == `Messages` && `bg-navItemHover`
              }`}
            >
              <MailUnread
                color={"#9ca3af"}
                width="20px"
                height="20px"
                cssClasses="path-red"
              />
              <span className="links_name">Messages</span>
            </NavLink>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <a href="#">
              <People color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Users</span>
            </a>
            <span className="tooltip">Users</span>
          </li>
          <li>
            <a href="#">
              <Card color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Transactions</span>
            </a>
            <span className="tooltip">Transactions</span>
          </li>
          <li>
            <a href="#">
              <Settings color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Settings</span>
            </a>
            <span className="tooltip">Settings</span>
          </li>
          <li>
            <a href="#">
              <LogOut color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Logout</span>
            </a>
            <span className="tooltip">Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
