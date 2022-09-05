import React, { useState, useEffect, useCallback } from "react";
import logo from "./../../logo.png";

const TableHeader = () => {
  return (
    <div className="container px-4 flex py-4 bg-rose-800 rounded">
      <div className=" w-36 rounded bg-rose-800">
        <p className=" font-bebas text-4xl py-4 text-white">GRUPO ORO</p>
      </div>
      <img src={logo} className="h-16 py-2 sm:h-16 ml-auto" alt="" />
      <p className=" font-bebas py-4 ml-4 text-white text-4xl">LIGA EL ALBA</p>
      <div className=" w-36 rounded bg-rose-800 ml-auto">
        <p className=" font-bebas text-4xl py-4 text-white ">PTS</p>
      </div>
      <div className=" w-36 rounded bg-rose-800 ml-4">
        <p className=" font-bebas text-4xl py-4 text-white">DG</p>
      </div>
    </div>
  );
};

export default TableHeader;
