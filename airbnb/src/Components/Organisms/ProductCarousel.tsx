import type { PropertyListDataType } from "../../utils/dataFormater";
import { useContext, useRef } from "react";

type ProductCarouselProps = {
  properties: PropertyListDataType;
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ properties }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="mx-auto my-0 max-w-[1440px]">
        <CardHeading {...{ title: properties.title, carouselRef }} />
        <div className="px-12  -mb-2 -mt-1">
          <div
            className=" pt-1 pb-2 justify-start grid grid-flow-col gap-x-2.75 gap-y-4  auto-cols-[calc(14.2857%_-_9.42857px)]  overflow-x-scroll"
            ref={carouselRef}
          >
            <CardStrip items={properties.items} />
          </div>
        </div>
      </div>
      {properties.title == "Airbnb Originals" && (
        <div className="px-12 pt-10 pb-2 max-w-360 -tracking-[0.96px]">
          <h1 className="font-medium text-[32px]/9">
            Popular with travellers from your area
          </h1>
        </div>
      )}
    </>
  );
  console.log("media query for inner div :  lg:auto-cols-[calc(20%_-_8.8px)]");
  console.log("media query for inner div wrapper :  lg:px-8");
};

export default ProductCarousel;

type headingProps = {
  title: string;
  carouselRef: React.RefObject<null | HTMLDivElement>;
};
import { dataContext } from "../../App";
import { exportSvg } from "../../assets/svgs";
import CardStrip from "../molecules/CardStrip";
// import PropertyModal from "../atoms/PropertyModal";
const CardHeading: React.FC<headingProps> = ({ title, carouselRef }) => {
  const productContext = useContext(dataContext);

  return (
    <div className="mx-12 mt-8 mb-3.5 text-[14px]/[20.2px] ">
      <div className=" flex " id="heading">
        <div className="title text-[20px]/[24px] -tracking-[0.18px] font-semibold flex translate-y-0.5 ">
          <p>{title}</p>
          {productContext && productContext.selected != 2 && (
            <span className="ml-0.5">
              <img
                src={exportSvg("rightArrow")}
                alt="rightArrow"
                className="mt-1.75"
              />
            </span>
          )}
        </div>
        <div className="navigation ml-auto flex gap-x-1">
          <button className="prev cursor-not-allowed opacity-[0.5]  bg-[#ffffff] flex items-center justify-center rounded-full w-6 border-1 border-[#DDDDDD]  ">
            <img
              src={exportSvg("carouselLeftArrow")}
              alt="carouselLeftArrow"
              className="translate-y-0.25"
            />
          </button>
          <button
            className="bg-[#f2f2f2] flex items-center justify-center rounded-full w-6"
            onClick={() => {
              carouselRef.current?.scrollBy({
                left: 200,
                behavior: "smooth",
              });
            }}
          >
            <img
              src={exportSvg("carouselRightArrow")}
              alt="carouselRightArrow"
              className="translate-y-0.25"
            />
          </button>
        </div>
      </div>
    </div>
  );
  console.log("required media query for heading : lg:-translate-y-0");
  console.log("required media query for heading wrapper: lg:mx-8");
};
