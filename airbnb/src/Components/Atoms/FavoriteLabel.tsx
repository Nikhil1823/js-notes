// import React from 'react'

const FavoriteLabel = ({ label }: { label: string }) => {
  return (
    <div className="bg-[#ffffffcc] h-fit px-[9.5px] py-[5.5px] border-[1px] rounded-[14px] inline-flex text-ellipsis overflow-clip  border-[#ffffffcc] text-[11px]/[13px]">
      <span
        className=" whitespace-nowrap break-all font-[600] "
        style={{ fontFeatureSettings: "'salt'" }}
      >
        {label}
      </span>
    </div>
  );
};

export default FavoriteLabel;
