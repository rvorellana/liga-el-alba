import React, { useState, useEffect, useCallback } from "react";
import banner from "./../../banner.png";

const Banner = () => {
  return (
    <div className="relative">
      <img className="md:w-full md:h-1/4" src={banner} alt="" />
    </div>
  );
};

export default Banner;
