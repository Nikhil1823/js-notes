import type { productType } from "../../data/HomePage";
type CardDetailsProps = {
  details: productType;
};

const CardDetails: React.FC<CardDetailsProps> = ({ details }) => {
  const price = details.offer.split("for")[0];
  const time = details.offer.split("for")[1];
  return (
    // <div className="text-content mx-1 grid gap-0.5 grid-cols-[minmax(0,1fr)_minmax(0, 1fr)_max-content] relative">

    <div className="mx-1 gap-0.5 flex flex-col">
      <span className="text-[13px]/[16px] font-medium overflow-clip overflow-ellipsis line-clamp-3 text-pretty">
        {details.name}
      </span>
      <div className="flex text-[12px]/[16px] relative translate-y-[2px]">
        <div className="text-[0.75rem]/[1rem] flex-wrap text-[#6A6A6A] flex items-baseline flex-row relative w-fit">
          <div>
            <span className="font-[400] inline-block">{price}</span>&nbsp;
          </div>
          <div>
            <span className=" font-[400]">for {time}</span>
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
          <span>{details.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
