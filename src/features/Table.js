import React, { useState, useEffect, useCallback } from "react";
import TableRow from "../components/Table/TableRow";
import TableHeader from "../components/Table/TableHeader";

const Table = () => {
  return (
    <div className="App mx-auto mt-4 w-4/6 bg-gradient-to-b from-rose-100 to-rose-200">
      <TableHeader />
      <TableRow name="FC BARCELONA" points="3" goalDifference="40" />
      <TableRow name="FC BARCELONA" points="3" goalDifference="40" />
      <TableRow name="FC BARCELONA" points="3" goalDifference="40" />
      <TableRow name="FC BARCELONA" points="3" goalDifference="40" />
    </div>
  );
};

export default Table;
