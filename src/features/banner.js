import React, { useState, useEffect, useCallback } from "react";
import logo from "./../logo.png";
import banner from "./../banner.png";

const Banner = () => {
  return (
    <div className="relative">
      <img className="md:w-full md:h-1/4" src={banner} alt="" />
      {/* <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        KindaCode.com
      </h1> */}
    </div>
  );
};

export default Banner;
