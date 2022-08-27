import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Form from "./Form";

const Home = () => {
  return (
    <div className="App mx-auto">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Home;
