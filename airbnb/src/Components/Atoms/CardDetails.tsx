import React from "react";
import type { productType } from "../../data/HomePage";
import { exportSvg } from "../../assets/svgs";
type CardDetailsProps = {
  details: productType;
};
const CardDetails: React.FC<CardDetailsProps> = ({ details }) => {
  const price = details.offer.split("for")[0];
  const time = details.offer.split("for")[1];

  return (
    <div className="mx-1 gap-0.5 flex flex-col">
      <span className="text-[13px]/[16px] font-medium overflow-clip overflow-ellipsis line-clamp-3 text-pretty">
        {details.name}
      </span>
      <div className=" text-[12px]/[16px] relative translate-y-0.5 ">
        <div className="  text-[0.75rem]/[1rem] flex-wrap text-[#6A6A6A] flex items-baseline flex-col relative w-full gap-0.5">
          {details?.loc && <span className="">{details.loc}</span>}
          <div className="flex flex-row ">
            <span className="font-normal">{price}</span>&nbsp;
            {time && (
              <span className="font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                for{time}
              </span>
            )}
            {details?.rating && (
              <>
                <span className="font-bold -translate-y-[2.1px] text-[#c1c1c1] ">
                  &nbsp;.&nbsp;
                </span>

                <div className="flex items-baseline gap-x-[2.5px] text-[#6a6a6a]">
                  <span className="my-auto">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: " block",
                        height: "8px",
                        width: "8px",
                        fill: "currentcolor",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                      ></path>
                    </svg> */}
                    <img src={exportSvg("ratingIcon")} alt="" />
                  </span>
                  <span>{details.rating}</span>
                </div>
              </>
            )}
          </div>
          {details?.min && <span>{details.min}</span>}
        </div>
      </div>
    </div>
  );
};

export default React.memo(CardDetails);
