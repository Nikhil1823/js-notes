import ProductCard from "../molecules/ProductCard";
import type { productCarouselType } from "../../data/HomePage";
type ProductCarouselProps = {
  items: productCarouselType[];
};

const ProductCarousel: React.FC<ProductCarouselProps> = ({ items }) => {
  return (
    <>
      {items?.map((item, i) => {
        return (
          <div className="mx-auto my-0 max-w-[1440px]" key={item?.title + i}>
            <CardHeading title={item.title} />
            <div className="px-[48px]  -mb-[8px] -mt-[4px]  ">
              <div
                id="inner-div"
                className=" pt-1 pb-2 justify-start grid grid-flow-col gap-x-[11px] gap-y-[16px]  auto-cols-[calc(14.2857%_-_9.42857px)] overflow-x-auto overflow-y-hidden "
              >
                {item.products.map((product, i) => {
                  return <ProductCard product={product} key={i} />;
                })}
              </div>
            </div>
          </div>
        );
        console.log(
          "media query for inner div :  lg:auto-cols-[calc(20%_-_8.8px)]"
        );
        console.log("media query for inner div wrapper :  lg:px-8");
      })}
    </>
  );
};

export default ProductCarousel;

type headingProps = {
  title: string;
};

const CardHeading: React.FC<headingProps> = ({ title }) => {
  return (
    <div className="mx-12 mt-8 mb-3.5 text-[14px]/[20.2px] ">
      <div className=" flex " id="heading">
        <div className="title text-[20px]/[24px] -tracking-[0.18px] font-[600] flex translate-y-0.5 ">
          <p>{title}</p>
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
          <button className="bg-[#f2f2f2] flex items-center justify-center rounded-full w-6">
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
