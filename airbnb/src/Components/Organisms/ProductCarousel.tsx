// import React from 'react'

import CardHeading from "../Atoms/CardHeading";
import ProductCard from "../Molecules/ProductCard";
// import ProductCards2 from "../Molecules/ProductCards2";

const ProductCarousel = () => {
  return (
    <>
      {/* <CardHeading />
      <div className="px-[48px]  -mb-[8px] -mt-[4px]">
        <div className="inner pt-1 pb-2 justify-start grid grid-flow-col gap-x-[11px] gap-y-[16px]  auto-cols-[calc(14.2857%_-_9.42857px)] overflow-x-auto overflow-y-hidden ">
          <ProductCards2 />
          <ProductCards2 />
          <ProductCards2 />
          <ProductCards2 />
          <ProductCards2 />
          <ProductCards2 />
          <ProductCards2 />
          <ProductCards2 />
        </div>
      </div> */}
      <CardHeading />
      <div className="px-[48px]  -mb-[8px] -mt-[4px]">
        <div className="inner pt-1 pb-2 justify-start grid grid-flow-col gap-x-[11px] gap-y-[16px]  auto-cols-[calc(14.2857%_-_9.42857px)] overflow-x-auto overflow-y-hidden ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default ProductCarousel;
