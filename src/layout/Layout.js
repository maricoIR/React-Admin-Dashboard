import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const Layout = (props) => {
  const {
    state: { sidebarToggle },
  } = useContext(DataContext);
  return (
    <>
      <Sidebar />
      <div
        className={`${
          sidebarToggle ? `ml-[260px]` : `ml-[90px]`
        } md:px-8 px-6 transition-all duration-[400ms]`}
      >
        <Navbar />
        {props.children}
      </div>
    </>
  );
};

export default Layout;
