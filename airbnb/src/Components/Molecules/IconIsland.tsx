import React from "react";
import NavIcons from "../atoms/NavIcons";
import type { HomeDataType } from "../../data/HomePage";
type HomeDataProp = {
  data: HomeDataType[];
};
const IconIsland: React.FC<HomeDataProp> = ({ data }) => {
  return (
    <div className="flex items-center h-20 w-125  ">
      <div className="mt-5.5 mb-6 w-full h-auto">
        <span className="flex justify-center">
          <div className="mt-1.25 flex  gap-x-8.75 ">
            {data?.map((item, i) => {
              const data = {
                heading: item.heading,
                videoUrl: item.videoUrl,
              };

              return <NavIcons {...data} key={i} />;
            })}
          </div>
        </span>
      </div>
    </div>
  );
};

export default IconIsland;
