import Layout from "../layout/Layout";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import MessagesTable from "./components/MessagesTable";
import { MessagesTopBar } from "./components/MessagesTopBar";
import "./styles.css";
import { Pagination } from "./components/Pagination";

const Messages = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [msgPerPage] = useState(5);
  const [update, setUpdate] = useState(false);

  const paginate = (number) => {
    setCurrentPage(number);
    dispatch({ messageID: [] });
  };

  const {
    state: { activePage, messages },
    dispatch,
  } = useContext(DataContext);

  useEffect(() => {
    dispatch({ activePage: "Messages" });
  }, [activePage, dispatch]);
  return (
    <Layout>
      <MessagesTopBar setUpdate={setUpdate} update={update} />
      <MessagesTable currentPage={currentPage} msgPerPage={msgPerPage} />
      <Pagination
        msgPerPage={msgPerPage}
        totalMessages={messages.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </Layout>
  );
};

export default Messages;
