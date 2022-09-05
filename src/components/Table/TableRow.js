import React, { useState, useEffect, useCallback } from "react";
import logo from "./../../logo.png";

const TableRow = (props) => {
  return (
    <div className="container mx-auto px-4 flex py-4">
      <div className=" w-36 rounded bg-rose-800">
        <p className=" font-bebas text-4xl py-4 text-white">1</p>
      </div>
      <img src={logo} className="h-16 py-2 sm:h-16 ml-12" alt="" />
      <p className=" font-bebas py-4 ml-4 text-black text-4xl">{props.name}</p>
      <div className=" w-36 rounded bg-rose-800 ml-auto">
        <p className=" font-bebas text-4xl py-4 text-white ">{props.points}</p>
      </div>
      <div className=" w-36 rounded bg-rose-800 ml-4">
        <p className=" font-bebas text-4xl py-4 text-red-400">
          {props.goalDifference}
        </p>
      </div>
    </div>
  );
};

export default TableRow;
