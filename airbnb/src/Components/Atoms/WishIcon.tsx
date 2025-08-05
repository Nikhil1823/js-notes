import React from "react";

import clsx from "clsx";
import { useState } from "react";
import { exportSvg } from "../../assets/svgs";
const WishIcon = ({ type }: { type: string }) => {
  const [isWish, setWish] = useState(false);
  const hanleClick = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.stopPropagation();
    setWish(!isWish);
  };

  return (
    <div className="flex ml-auto ">
      <div
        className={clsx(
          "justify-center items-center  break-all font-[600] flex w-8 h-8 ",
          type != "like" ? "-mt-0.25 -mr-0.5 " : "-mt-0.75 -mr-1"
        )}
      >
        <button
          className={clsx(
            "outline-none  cursor-pointer  text-base leading-5 justify-center items-center border-none rounded-full inline-flex",
            type != "like"
              ? "border-1 bg-[#ffffffcc] h-7 w-7"
              : "bg-transparent  w-8 h-8 "
          )}
        >
          <span className="inline-block text-[1rem]/[1.25rem] font-medium">
            {type == "like" ? (
              <img
                src={!isWish ? exportSvg("wishIcon") : exportSvg("redWishIcon")}
                alt="wishIcon"
                onClick={(e) => hanleClick(e)}
              />
            ) : (
              <img src={exportSvg("shareIcon")} alt="shareIcon" />
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default React.memo(WishIcon);
