import React, { useEffect } from "react";

import clsx from "clsx";
type ModalPropType = {
  modalStatus: boolean;
  setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};
const CustomModal: React.FC<ModalPropType> = ({
  modalStatus,
  setModalStatus,

  children,
}) => {
  useEffect(() => {
    if (modalStatus) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [modalStatus]);
  return (
    <div
      className={clsx(
        "bg-[rgba(0,0,0,0.75)] h-full absolute inset-0 z-10 w-full flex justify-center items-center",
        !modalStatus && "hidden"
      )}
      onClick={() => setModalStatus(false)}
    >
      <div
        className="max-w-80 p-8  bg-white h-[97%] max-h-200 rounded-[20px] relative"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className=" overflow-y-scroll flex  items-center flex-col  gap-y-2 h-full w-full ">
          <button
            className="absolute  bg-white border-1 rounded-full w-8 h-8 -top-5 -right-10"
            onClick={() => setModalStatus(!modalStatus)}
          >
            <span>X</span>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
