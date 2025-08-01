type headingProps = {
  title: string;
};
const CardHeading: React.FC<headingProps> = ({ title }) => {
  return (
    <div className="mx-12 mt-8 mb-3.5 text-[14px]/[20.2px]">
      <div className="heading flex ">
        <div className="title text-[20px]/[24px] -tracking-[0.18px] font-[600] flex translate-y-0.5">
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
          <button className="prev cursor-not-allowed opacity-[0.5]  bg-[#ffffff]">
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
              }}
            >
              <path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path>
            </svg>
          </button>
          <button className="for">
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
  <div className="flex">
    <div className="mx-12 mt-8 mb-3.5 text-[14px]/[20.2px]">
      <div className=" font-[400]  pr-[12px]">
        <span className=" text-[20px]/[24px] -tracking-[0.18px] font-[600] text-[#222222]">
          {title}
        </span>
        <span className="ml-[2px] self-center">
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
            <path fill="none" d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"></path>
          </svg>
        </span>
      </div>
    </div>
    <div className="ml-auto items-center">hello</div>
  </div>;
};

export default CardHeading;
