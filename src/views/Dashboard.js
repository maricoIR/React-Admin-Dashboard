import Layout from "../layout/Layout";
import Stats from "./components/Stats";
import Infos from "./components/Infos";
import "./styles.css";

const Dashboard = () => {
  return (
    <Layout>
      <Stats />
      <Infos />
    </Layout>
  );
};

export default Dashboard;
