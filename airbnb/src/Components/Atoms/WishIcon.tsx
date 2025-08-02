// import React from 'react'

import clsx from "clsx";

import { useState } from "react";
const WishIcon = ({ type }: { type: string }) => {
  const [isWish, setWish] = useState(false);
  return (
    <div className="flex ml-auto">
      <div
        className={clsx(
          "justify-center items-center  break-all font-[600] flex w-8 h-8 ",
          type != "like" ? "-mt-0.25 -mr-0.5 " : "-mt-0.75 -mr-1"
        )}
      >
        <button
          className={clsx(
            "outline-none    text-base leading-5 justify-center items-center border-none rounded-[50%] inline-flex",
            type != "like"
              ? "border-1 bg-[#ffffffcc] h-7 w-7"
              : "bg-transparent  w-8 h-8 "
          )}
        >
          <span className="inline-block text-[1rem]/[1.25rem] font-medium">
            {type == "like" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  // fill: "rgba(0, 0, 0, 0.5)",
                  height: "24px",
                  width: "24px",
                  stroke: "#ffffff",
                  strokeWidth: 2,
                  overflow: "visible",
                }}
                onClick={() => {
                  setWish(!isWish);
                }}
                className={clsx(
                  isWish ? "fill-red-500" : "fill-[rgba(0, 0, 0, 0.5)]"
                )}
              >
                <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
              </svg>
            ) : (
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  fill: "none",
                  height: "12px",
                  width: "12px",
                  stroke: "rgb(34, 34, 34)",
                  strokeWidth: 4,
                  overflow: "visible",
                }}
              >
                <path
                  d="m27 18v9c0 1.1046-.8954 2-2 2h-18c-1.10457 0-2-.8954-2-2v-9m11-15v21m-10-11 9.2929-9.29289c.3905-.39053 1.0237-.39053 1.4142 0l9.2929 9.29289"
                  fill="none"
                ></path>
              </svg>
            )}
          </span>
        </button>
      </div>
    </div>
  );
  console.log(type);
};

export default WishIcon;
