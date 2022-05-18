import { EllipsisHorizontal } from "react-ionicons";
import Layout from "../layout/Layout";
import "./styles.css";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const Tasks = () => {
  const {
    state: { activePage },
    dispatch,
  } = useContext(DataContext);

  useEffect(() => {
    dispatch({ activePage: "Tasks" });
  }, []);

  return (
    <Layout>
      <div className="w-full flex items-start justify-between mb-8">
        <div className="w-full">
          <div className="w-[90%] flex items-center justify-between">
            <span className="text-[#565656] font-normal text-[15px]">
              Backlog
            </span>
            <EllipsisHorizontal
              width="18px"
              height="18px"
              color={"#565656"}
              cssClasses="cursor-pointer"
            />
          </div>
          <div className="w-[90%] flex flex-col items-center gap-5 mt-5">
            <div className="w-full bg-white h-[200px] rounded-lg border-[.0625rem] flex items-center justify-center border-[#11182720]">
              <span className="text-[20px] text-boxText">1</span>
            </div>
            <div className="w-full bg-white h-[200px] rounded-lg border-[.0625rem] flex items-center justify-center border-[#11182720]">
              <span className="text-[20px] text-boxText">2</span>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="w-[90%] flex items-center justify-between">
            <span className="text-[#565656] font-normal text-[15px]">Todo</span>
            <EllipsisHorizontal
              width="18px"
              height="18px"
              color={"#565656"}
              cssClasses="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-[90%] flex items-center justify-between">
            <span className="text-[#565656] font-normal text-[15px]">
              Doing
            </span>
            <EllipsisHorizontal
              width="18px"
              height="18px"
              color={"#565656"}
              cssClasses="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="w-[90%] flex items-center justify-between">
            <span className="text-[#565656] font-normal text-[15px]">Done</span>
            <EllipsisHorizontal
              width="18px"
              height="18px"
              color={"#565656"}
              cssClasses="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Tasks;
