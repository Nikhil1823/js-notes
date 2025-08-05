import FavoriteLabel from "../atoms/FavoriteLabel";
import WishIcon from "../atoms/WishIcon";
import CardDetails from "../atoms/CardDetails";
import type { productType } from "../../data/HomePage";
import React, { useState, useCallback } from "react";
import CustomModal from "../atoms/CustomModal";
import { exportSvg } from "../../assets/svgs";
type ProductCardProps = {
  product: productType;
};
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [property, setProperty] = useState<productType | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModalStatus = useCallback((item: productType) => {
    setModalOpen(!isModalOpen);
    setProperty(item);
  }, []);
  return (
    <>
      <div
        className="container flex flex-col gap-2 grow shrink-0 basis-full text-[0.875rem]/[1.43] cursor-pointer"
        onClick={() => handleModalStatus(product)}
      >
        <div className="image-div relative rounded-[20px] inline-block">
          <div className="aspect-[20/19] rounded-[20px] overflow-clip relative">
            <img
              className="object-center object-cover w-full align-bottom relative h-full"
              src={product.image}
              alt=""
            />
            <div className="p-3 pb-0 absolute  inset-0 ">
              <div className="flex justify-between ">
                {product.isGuestFav?.length > 0 && (
                  <FavoriteLabel label={product.isGuestFav} />
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
      <CustomModal modalStatus={isModalOpen} setModalStatus={setModalOpen}>
        <>
          <div className="flex flex-row">
            <img
              src={property?.image}
              alt=""
              className="rounded-[12px] object-cover object-center aspect-[20/19]"
            />
          </div>

          <h2 className="text-2xl mt-10 font-semibold tracking-wide ">
            {property?.name}
          </h2>
          <div className="offer  flex items-start flex-col justify-items-start w-full">
            {property?.rating && (
              <div className="pl-1.5">
                <img
                  src={exportSvg("ratingIcon")}
                  alt="ratingIcon"
                  className="scale-200 inline-block -translate-y-0.5 mr-2"
                />
                <span className="text-[21px] text-blue-600">
                  {property.rating}
                </span>
              </div>
            )}
            <div>
              <span className=" text-[22px] font-medium ">
                {property?.offer.split("for")[0]}
              </span>
              <span className="text-xl text-gray-600">
                for {property?.offer.split("for")[1]}
              </span>
            </div>
          </div>

          <p className="text-2xl text-grey-900 ">
            THis is beautiful villa Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Provident tempore itaque placeat iure similique.
            Sit explicabo earum alias impedit deserunt enim blanditiis nesciunt
            fugiat similique nihil iure, error nisi eius?
          </p>
        </>
      </CustomModal>
    </>
  );
};

export default React.memo(ProductCard);
