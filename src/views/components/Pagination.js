import React from "react";
import {
  ChevronBackCircle,
  ChevronForwardCircle,
  ChevronBack,
  ChevronForward,
} from "react-ionicons";

export const Pagination = ({
  msgPerPage,
  totalMessages,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  for (let index = 1; index <= Math.ceil(totalMessages / msgPerPage); index++) {
    pageNumbers.push(index);
  }
  return (
    <div className="w-full rounded-[0.5rem] flex items-center gap-3 mb-8">
      <ChevronBack color={"#3f3f64"} width={"21px"} height={"21px"} />
      {pageNumbers.map((number) => (
        <span
          onClick={() => paginate(number)}
          className={`w-[34px] h-[34px] text-tabletext text-[15px] cursor-pointer flex items-center justify-center ${
            number == currentPage && `text-white bg-barColor rounded-full`
          }`}
        >
          {number}
        </span>
      ))}
      <ChevronForward color={"#3f3f64"} width={"21px"} height={"21px"} />
    </div>
  );
};
