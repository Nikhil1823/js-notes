import { useContext } from "react";
import { dataContext } from "../../App";
import { clsx } from "clsx";
import type { HomeDataType } from "../../data/HomePage";
import DestinationSelector from "../atoms/DestinationSelector";
import IconCollection from "../molecules/IconCollection.tsx";
import { exportSvg } from "../../assets/svgs/index.ts";
type HeaderPropType = {
  data: HomeDataType[];
};

const Header = ({ data }: HeaderPropType) => {
  return (
    <div className={"header-bg w-full  h-[199.68px]  origin-top "}>
      <Navbar data={data} />
      <SearchBar data={data} />
    </div>
  );
};

export default Header;

const SearchBar = ({ data }: HeaderPropType) => {
  const productContext = useContext(dataContext);
  const arrLen = productContext
    ? data[productContext?.selected].searchBar.length
    : 0;

  return (
    <div className="h-16.5 max-w-212.5 mx-auto rounded-4xl relative ">
      <div
        className="h-full w-full rounded-4xl border-1 absolute z-1 border-[#DDDDDD]"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0 8px 24px 0, rgba(0, 0, 0, 0.02) 0 0 0 1px",
        }}
      ></div>
      <div
        className={clsx(
          "grid  gap-x-0.5 h-full items-center relative rounded-4xl  bg-[#ffffff] grid-cols-[minmax(0,1fr)_1px_minmax(0,1fr)_1px_minmax(0,1fr)]",
          productContext?.selected == 0 &&
            "grid-cols-[minmax(0,2fr)_1px_minmax(0,1fr)_1px_minmax(0,1fr)_1px_minmax(0,2fr)]"
        )}
      >
        {productContext &&
          data[productContext.selected].searchBar.map((item, i) => {
            const data = {
              title: item.title,
              sub: item.sub,
              extraPadding: i == 0,
            };

            return (
              <>
                <DestinationSelector {...data} key={i + Math.random()} />
                {arrLen != i + 1 && (
                  <div className="h-8 w-0.25 bg-[#DDDDDD]"></div>
                )}
              </>
            );
          })}
        <div id="search-icon" className="p-2.5 absolute right-0">
          <button className="bg-[#FF385C] p-2.5 rounded-full w-12 h-12 flex items-center justify-center">
            <img src={exportSvg("searchIcon")} alt="searchIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ data }: HeaderPropType) => {
  return (
    <div className="px-12 pt-2 flex justify-between h-25.5">
      <div id="left" className="h-20 items-center flex w-[225.28px]">
        <img src={exportSvg("logo")} alt="logo" />
      </div>
      <IconCollection data={data} />

      <div id="right" className="flex items-center justify-end h-20">
        <div
          id="right-wrapper"
          className="flex items-center justify-end flex-auto mr-3 gap-x-3"
        >
          <button className="px-3 py-2.75 text-[14px]/[normal] border-[#ffffff] border-1 rounded-3xl  border-t-0 font-medium pr-[11.5px] cursor-pointer">
            Become a host
          </button>
          <button className="w-10 h-10 bg-[#f2f2f2] flex items-center justify-center rounded-full">
            <img src={exportSvg("worldIcon")} alt="worldIcon" />
          </button>
        </div>
        <div id="ham" className="">
          <button className="w-10 h-10  bg-[#f2f2f2] flex items-center justify-center rounded-full">
            <img src={exportSvg("hamIcon")} alt="hamIcon" />
          </button>
        </div>
      </div>
    </div>
  );
};
