// import React from 'react'

import CardDetails from "../Atoms/CardDetails";
import FavoriteLabel from "../Atoms/FavoriteLabel";
import WishIcon from "../Atoms/WishIcon";
import type { productType } from "../../utils/Data";
type ProductCardType = {
  product: productType;
};
const ProductCard = ({ product }: ProductCardType) => {
  return (
    <>
      <div className="container flex flex-col gap-2 grow shrink-0 basis-full text-[0.875rem]/[1.43]">
        <div className="image-div relative rounded-[20px] inline-block">
          <div className="aspect-[20/19] rounded-[20px] overflow-clip relative">
            <img
              className="object-center object-cover w-full align-bottom relative h-full"
              src={product.image}
              alt=""
            />
            <div className="p-3 pb-0 absolute  inset-0 ">
              <div className="flex justify-between ">
                {product.isGuestFav?.length > 0 ? (
                  <FavoriteLabel label={product.isGuestFav} />
                ) : (
                  ""
                )}
                <WishIcon
                  type={
                    product.buttonType?.length ? product.buttonType : "like"
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <CardDetails details={product} />
      </div>
    </>
  );
};

export default ProductCard;
