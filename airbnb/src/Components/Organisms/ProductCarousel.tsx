// import React from 'react'

import CardHeading from "../Atoms/CardHeading";
import ProductCard from "../Molecules/ProductCard";
import type { productCarouselType } from "../../utils/Data";
type ProductCarouselType = {
  items: productCarouselType[];
};

const ProductCarousel = ({ items }: ProductCarouselType) => {
  return (
    <>
      {items.map((item) => {
        return (
          <>
            <CardHeading title={item.title} />
            <div className="px-[48px]  -mb-[8px] -mt-[4px]">
              <div className="inner pt-1 pb-2 justify-start grid grid-flow-col gap-x-[11px] gap-y-[16px]  auto-cols-[calc(14.2857%_-_9.42857px)] overflow-x-auto overflow-y-hidden ">
                {item.products.map((product) => {
                  return <ProductCard product={product} />;
                })}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ProductCarousel;
