import Layout from "../layout/Layout";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import MessagesTable from "./components/MessagesTable";

const Messages = () => {
  const {
    state: { activePage },
    dispatch,
  } = useContext(DataContext);

  useEffect(() => {
    dispatch({ activePage: "Messages" });
  }, []);
  return (
    <Layout>
      <MessagesTable />
    </Layout>
  );
};

export default Messages;
