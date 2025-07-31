const CardHeading = () => {
  return (
    <div className="flex">
      <div className="mx-12 mt-8 mb-3.5 text-[14px]/[20.2px]">
        <div className=" font-[400]  pr-[12px]">
          <span className=" text-[20px]/[24px] -tracking-[0.18px] font-[600]">
            Popular homes in Bengaluru{" "}
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
              }}
            >
              <path
                fill="none"
                d="m12 4 11.3 11.3a1 1 0 0 1 0 1.4L12 28"
              ></path>
            </svg>
          </span>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CardHeading;
