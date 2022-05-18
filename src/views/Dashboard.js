import Layout from "../layout/Layout";
import Stats from "./components/Stats";
import Infos from "./components/Infos";
import "./styles.css";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";

const Dashboard = () => {
  const {
    state: { activePage },
    dispatch,
  } = useContext(DataContext);

  useEffect(() => {
    dispatch({ activePage: "Dashboard" });
  }, []);

  return (
    <Layout>
      <Stats />
      <Infos />
    </Layout>
  );
};

export default Dashboard;
