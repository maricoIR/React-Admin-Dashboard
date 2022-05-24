import React from "react";
import Layout from "../layout/Layout";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/data";

const Tasks = () => {
  const {
    state: { activePage },
    dispatch,
  } = useContext(DataContext);

  useEffect(() => {
    dispatch({ activePage: "Tasks" });
  }, [activePage, dispatch]);

  return (
    <Layout>
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: "Summary", headerField: "Id" }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </Layout>
  );
};

export default Tasks;
