// import React from 'react'

import FavoriteLabel from "../Atoms/FavoriteLabel";
import WishIcon from "../Atoms/WishIcon";

const ProductCard = () => {
  return (
    <>
      <div className="container flex flex-col gap-2 grow shrink-0 basis-full text-[0.875rem]/[1.43]">
        <div className="image-div relative rounded-[20px] inline-block">
          <div className="aspect-[20/19] rounded-[20px] overflow-clip relative">
            <img
              className="object-center object-cover align-bottom relative h-full"
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1270314768198309910/original/c389f712-5665-4b38-b83b-29f9b8fd73d0.jpeg?im_w=480"
              alt=""
            />
            <div className="top-[10px] left-3 grid grid-cols-[repeat(2,minmax(min-content,auto))]  absolute  gap-4">
              <FavoriteLabel />
              <WishIcon />
            </div>
          </div>
        </div>

        <div className="text-content mx-1 grid gap-0.5 grid-cols-[minmax(0,1fr)_minmax(0, 1fr)_max-content] relative">
          <span className="text-[13px]/[0.8125rem] font-medium overflow-clip overflow-ellipsis line-clamp-3">
            Apartment in Narayanpur
          </span>
          <div className="flex text-[12px]/[16px] relative">
            <div className="text-[0.75rem]/[1rem] flex-wrap text-[#6A6A6A] flex items-baseline flex-row relative w-fit">
              <div>
                <span className="font-[400] inline-block">₹3,878</span>&nbsp;
              </div>
              <div>
                <span className=" font-[400]">for 2 nights</span>
              </div>

              {/* <span>buyhouse</span> */}
            </div>
            <div className="font-bold relative">
              <span className="flex justify-center items-center text-[#c1c1c1]">
                &nbsp;.&nbsp;
              </span>
            </div>
            <div className="flex items-baseline gap-x-[2.5px] text-[#6a6a6a]">
              <span className="my-auto">
                <svg
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
                    fill-rule="evenodd"
                    d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
                  ></path>
                </svg>
              </span>
              <span>4.99</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
