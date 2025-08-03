import ProductCard from "../molecules/ProductCard";
import type { productCarouselType } from "../../data/HomePage";
import { useContext, useRef } from "react";

type ProductCarouselProps = {
  items: productCarouselType;
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ items }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="mx-auto my-0 max-w-[1440px]">
        <CardHeading {...{ title: items.title, carouselRef }} />
        <div className="px-12  -mb-2 -mt-1">
          <div
            className=" pt-1 pb-2 justify-start grid grid-flow-col gap-x-2.75 gap-y-4  auto-cols-[calc(14.2857%_-_9.42857px)]  overflow-x-scroll  "
            ref={carouselRef}
          >
            <ProductCard product={items.products} />
          </div>
        </div>
      </div>
      {items.title == "Airbnb Originals" && (
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
const CardHeading: React.FC<headingProps> = ({ title, carouselRef }) => {
  const productContext = useContext(dataContext);
  return (
    <div className="mx-12 mt-8 mb-3.5 text-[14px]/[20.2px] ">
      <div className=" flex " id="heading">
        <div className="title text-[20px]/[24px] -tracking-[0.18px] font-semibold flex translate-y-0.5 ">
          <p>{title}</p>
          {productContext && productContext.selected != 2 && (
            <span className="ml-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  fill: "none",
                  height: "12px",
                  width: "12px",
                  display: "inline",
                  stroke: "currentcolor",
                  strokeWidth: 5.33333,
                  overflow: "visible",
                  marginTop: "-2px",
                }}
              >
                <path
                  fill="none"
                  d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
                ></path>
              </svg>
            </span>
          )}
        </div>
        <div className="navigation ml-auto flex gap-x-1">
          <button className="prev cursor-not-allowed opacity-[0.5]  bg-[#ffffff] flex items-center justify-center rounded-full w-6 border-1 border-[#DDDDDD]  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: "12px",
                width: "12px",
                stroke: "#c1c1c1",
                strokeWidth: 4,
                overflow: "visible",
                transform: "translateY(0.8px)",
              }}
            >
              <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
            </svg>
          </button>
          <button
            className="bg-[#f2f2f2] flex items-center justify-center rounded-full w-6"
            onClick={() => {
              console.log(carouselRef.current?.scrollBy);

              carouselRef.current?.scrollBy({
                left: 200,
                behavior: "smooth",
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                fill: "none",
                height: "12px",
                width: "12px",
                stroke: "currentcolor",
                strokeWidth: 4,
                overflow: "visible",
                transform: "translateY(0.8px)",
              }}
            >
              <path
                fill="none"
                d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
  console.log("required media query for heading : lg:-translate-y-0");
  console.log("required media query for heading wrapper: lg:mx-8");
};
