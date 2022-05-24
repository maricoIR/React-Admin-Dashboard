import reactIcon from "../../assets/images/reactIcon.png";
import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { NavLink } from "react-router-dom";
import {
  StatsChart,
  Calendar,
  People,
  Grid,
  Card,
  Settings,
  LogOut,
  MailUnread,
} from "react-ionicons";
import "./Sidebarstyles.css";

const Sidebar = () => {
  const {
    state: { sidebarToggle, activePage },
    dispatch,
  } = useContext(DataContext);

  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize < 750) {
      dispatch({ sidebarToggle: false });
    } else {
      dispatch({ sidebarToggle: true });
    }
  }, [screenSize]);

  return (
    <>
      <div className={`sidebar ${sidebarToggle && `active`}`}>
        <ul className="nav_list">
          <li>
            <a
              href="https://github.com/maricoIR"
              target="_blank"
              rel="noreferrer"
            >
              <img src={reactIcon} alt="logo" className="w-5 h-5" />
              <span className="links_name">My Github</span>
            </a>
            <span className="tooltip">My Github</span>
          </li>
          <li>
            <NavLink
              to="/"
              className={`w-full ${
                activePage === `Dashboard` && `bg-navItemHover`
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
                activePage === `Messages` && `bg-navItemHover`
              }`}
            >
              <MailUnread
                color={"#9ca3af"}
                width="20px"
                height="20px"
                cssClasses="path-red"
              />
              <span className="links_name">Messages</span>
              {/* <span className="links_name red_flag">4</span> */}
            </NavLink>
            <span className="tooltip">Messages</span>
          </li>
          <li>
            <NavLink
              to="/tasks"
              className={`w-full ${
                activePage === `Tasks` && `bg-navItemHover`
              }`}
            >
              <Grid color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Tasks</span>
            </NavLink>
            <span className="tooltip">Tasks</span>
          </li>
          <li>
            <NavLink to="/calendar">
              <Calendar color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Calendar</span>
            </NavLink>
            <span className="tooltip">Calendar</span>
          </li>
          <li>
            <NavLink to="/building">
              <People color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Users</span>
            </NavLink>
            <span className="tooltip">Users</span>
          </li>
          <li>
            <NavLink to="/building">
              <Card color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Transactions</span>
            </NavLink>
            <span className="tooltip">Transactions</span>
          </li>
          <li>
            <NavLink to="/building">
              <Settings color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Settings</span>
            </NavLink>
            <span className="tooltip">Settings</span>
          </li>
          <li>
            <NavLink to="/building">
              <LogOut color={"#9ca3af"} width="20px" height="20px" />
              <span className="links_name">Logout</span>
            </NavLink>
            <span className="tooltip">Logout</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
