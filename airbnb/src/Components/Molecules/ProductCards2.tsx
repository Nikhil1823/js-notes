import CardDetails from "../Atoms/CardDetails";
// import FavoriteLabel from "../Atoms/FavoriteLabel";
import Favotest from "../Atoms/Favotest";
import WishIcon from "../Atoms/WishIcon";

const ProductCards2 = () => {
  return (
    <>
      <div className="container flex flex-col gap-2 grow shrink-0 basis-full text-[0.875rem]/[1.43]">
        <div className="image-div relative rounded-[20px] inline-block">
          <div className="aspect-[20/19] rounded-[20px] overflow-clip relative">
            <img
              className="object-center object-cover align-bottom relative h-full"
              src="https://a0.muscache.com/im/pictures/hosting/Hosting-1118422882348724135/original/a40a9fc3-9bee-46fc-bc33-61dd649cd6a8.jpeg?im_w=480"
              alt=""
            />
            <div className="p-3 pb-0 absolute  inset-0 ">
              <div className="flex justify-between">
                <Favotest />
                <WishIcon />
              </div>
            </div>
          </div>
        </div>
        <CardDetails />
      </div>
    </>
  );
};

export default ProductCards2;
