// import React from 'react'
import { useState } from "react";
import { exportSvg } from "../../assets/svgs";
import type { footerDestinationDataType } from "../../data/HomePage";
import FooterDestinationItems from "../atoms/FooterDestinationItems";
import clsx from "clsx";
type propType = {
  destination: footerDestinationDataType;
};
const FooterDestination = ({ destination }: propType) => {
  const [limit, setLimit] = useState(17);
  return (
    <div>
      <h2 className="mb-2  text-[1.375rem]/[1.625rem] font-medium -tracking-[0.01375 rem]">
        Inspiration for future getaways
      </h2>
      <div className="px-3 -mx-3">
        <button className="my-1.5 p-2.5 -ml-2.5 text-[0.875rem]/[1.125rem] font-medium border-b-1">
          {destination.title}
        </button>
      </div>
      <div className="pt-8">
        <ul className="grid [grid-template-columns:repeat(6,minmax(0,1fr))] gap-y-6 gap-x-2">
          {destination.items.slice(0, limit).map((item, i) => {
            return <FooterDestinationItems data={item} key={i} />;
          })}
          <li className="text-[0.875rem]/[1.125rem]">
            <button
              className={clsx("border-0 gap-1 flex", limit > 18 && "hidden")}
              onClick={() => {
                setLimit(destination.items.length);
              }}
            >
              <span>Show more</span>
              <img src={exportSvg("downArrow")} alt="" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterDestination;
