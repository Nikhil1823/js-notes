import React, { useState } from "react";
import type { PropertyDataType } from "../../utils/dataFormater";
import { exportSvg } from "../../assets/svgs";
import CustomModal from "./CustomModal";
import PropertyUpdater from "../molecules/PropertyUpdater";
type CardDetailsProps = {
  details: PropertyDataType;
};
const CardDetails: React.FC<CardDetailsProps> = ({ details }) => {
  // const price = details.offer.split("for")[0];
  // const time = details.offer.split("for")[1];
  const [isModalOpen, setModalStatus] = useState(false);

  return (
    <>
      <div className="mx-1 gap-0.5 flex flex-col">
        <span className="text-[13px]/[16px] font-medium overflow-clip overflow-ellipsis line-clamp-3 text-pretty">
          {details.property_type} in {details.location}
        </span>
        <div className=" text-[12px]/[16px] relative translate-y-0.5 ">
          <div className="  text-[0.75rem]/[1rem] flex-wrap text-[#6A6A6A] flex items-baseline flex-col relative w-full gap-0.5">
            {/* {details?.loc && <span className="">{details.loc}</span>} */}
            <div className="flex flex-row ">
              <span className="font-normal pr-0.5">
                ₹{details.price.toLocaleString()}
              </span>
              &nbsp;
              {details?.duration && (
                <span className="font-normal whitespace-nowrap overflow-hidden text-ellipsis">
                  for {details.duration} {details.duration_type}
                </span>
              )}
              {details?.rating && (
                <>
                  <span className="font-bold -translate-y-[2.1px] text-[#c1c1c1] ">
                    &nbsp;.&nbsp;
                  </span>

                  <div className="flex items-baseline gap-x-[2.5px] text-[#6a6a6a]">
                    <span className="my-auto">
                      <img src={exportSvg("ratingIcon")} alt="" />
                    </span>
                    <span>{details.rating}</span>
                  </div>
                </>
              )}
            </div>
            {/* {details?.min && <span>{details.min}</span>} */}
            <p
              className="text-blue-600 pl-1"
              onClick={() => setModalStatus(!isModalOpen)}
            >
              edit ?
            </p>
          </div>
        </div>
      </div>
      <CustomModal setModalStatus={setModalStatus} modalStatus={isModalOpen}>
        <h1>Update Details</h1>
        <PropertyUpdater details={details} />
      </CustomModal>
    </>
  );
};

export default React.memo(CardDetails);
