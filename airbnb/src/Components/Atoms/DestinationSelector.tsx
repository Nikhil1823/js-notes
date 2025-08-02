import clsx from "clsx";
import React from "react";

type DestinationPropType = {
  title: string;
  sub: string;
  extraPadding: boolean;
};
const DestinationSelector: React.FC<DestinationPropType> = ({
  extraPadding,
  title,
  sub,
}) => {
  return (
    <div className={clsx("py-3.75", extraPadding ? "px-8 " : "px-6")}>
      <div className="text-[0.75rem]/[1rem] pb-0.5">{title}</div>
      <div className="text-[14px]/[18px] text-[#222222] opacity-80">{sub}</div>
    </div>
  );
};

export default DestinationSelector;
