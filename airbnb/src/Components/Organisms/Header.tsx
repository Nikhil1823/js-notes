// import React from 'react'
import { clsx } from "clsx";
import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className={clsx("header-bg w-full  h-[199.68px]  origin-top ")}>
      {/* <div className="nav h-[96px] inline-flex relative p-[48px]"> */}

      <Navbar />
    </div>
  );
};

export default Header;
