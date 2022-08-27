import React, { useState, useEffect, useCallback } from "react";
import logo from "./../logo.png";

const Banner = () => {
  return (
    <div class="relative">
      <img src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg" />
      <h1 class="absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        KindaCode.com
      </h1>
    </div>
  );
};

export default Banner;
