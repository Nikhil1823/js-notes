import FavoriteLabel from "../atoms/FavoriteLabel";
import WishIcon from "../atoms/WishIcon";
import CardDetails from "../atoms/CardDetails";
import type { PropertyDataType } from "../../utils/dataFormater";
import React, { useState, useCallback } from "react";
import CustomModal from "../atoms/CustomModal";
import { exportSvg } from "../../assets/svgs";
type ProductCardProps = {
  product: PropertyDataType;
};
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [property, setProperty] = useState<PropertyDataType | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModalStatus = useCallback((item: PropertyDataType) => {
    setModalOpen(!isModalOpen);
    setProperty(item);
  }, []);
  return (
    <>
      <div className="container flex flex-col gap-2 grow shrink-0 basis-full text-[0.875rem]/[1.43] cursor-pointer">
        <div
          className="image-div relative rounded-[20px] inline-block"
          onClick={() => handleModalStatus(product)}
        >
          <div className="aspect-[20/19] rounded-[20px] overflow-clip relative">
            <img
              className="object-center object-cover w-full align-bottom relative h-full"
              src={product.images[0]}
              alt=""
            />
            <div className="p-3 pb-0 absolute  inset-0 ">
              <div className="flex justify-between ">
                {product.tag?.length > 0 && (
                  <FavoriteLabel label={product.tag} />
                )}
                <WishIcon
                  type={
                    product.buttonType?.length ? product.buttonType : "like"
                  }
                  is_liked={product.is_liked}
                  id={product.id}
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
              src={property?.images[0]}
              alt=""
              className="rounded-[12px] object-cover object-center aspect-[20/19]"
            />
          </div>

          <h2 className="text-2xl mt-10 font-semibold tracking-wide ">
            {property?.address}
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
              <span className=" text-[22px] font-medium pr-2">
                ₹ {property?.price}
              </span>

              <span className="text-xl text-gray-600">
                for {property?.duration} {property?.duration_type}
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
