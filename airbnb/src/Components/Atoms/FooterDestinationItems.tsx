// import React from "react";
import type { footerItems } from "../../data/HomePage";
type PropType = {
  data: footerItems;
};
const FooterDestinationItems = ({ data }: PropType) => {
  return (
    <li className="text-[0.875rem]/[1.125rem] flex flex-col text-ellipsis whitespace-nowrap overflow-hidden text-[#6a6a6a]">
      <span className="text-[#222222]  font-medium ">{data.heading}</span>
      {data.subHeading}
    </li>
  );
};

export default FooterDestinationItems;
