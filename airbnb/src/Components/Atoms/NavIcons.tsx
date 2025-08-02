import clsx from "clsx";
import { useContext } from "react";
import { dataContext } from "../../App";
type NavIconProp = {
  heading: string;
  videoUrl: string;
};

const indexResolver = (heading: string) => {
  switch (heading) {
    case "Homes":
      return 0;
    case "Experiences":
      return 1;
    case "Services":
      return 2;
    default:
      return 0;
  }
};
const NavIcons = ({ heading, videoUrl }: NavIconProp) => {
  const productContext = useContext(dataContext);
  const index = indexResolver(heading);
  console.log(index);

  return (
    <div
      key={heading}
      className="flex items-center relative"
      onClick={() => {
        console.log("clicked here", index);

        productContext?.setSelected(index);
      }}
    >
      <span className="h-9 w-9 inline-block">
        <video
          autoPlay
          src={videoUrl}
          className="w-full h-full scale-200"
        ></video>
      </span>
      <span
        id="text"
        className={clsx(
          "font-semibold text-[14px]/[18px] -translate-y-0.5",
          index == 0 && "ml-4",
          index == 1 && "ml-2",
          index == 2 && "ml-3"
        )}
      >
        {heading}
      </span>
      {index == productContext?.selected && (
        <span className="w-full bg-black h-0.75 absolute -bottom-3  rounded-2xl border-b-4 "></span>
      )}
    </div>
  );
};

export default NavIcons;
