import type React from "react";
import type { productType } from "../../data/HomePage";
type productPropType = {
  property: productType;
};
const Footer: React.FC<productPropType> = ({ property }) => {
  return (
    <div className="h-45 w-full mt-12.25">
      <div className="top mx-12 py-12">
        <div>{property.name}</div>
      </div>

      <div className="px-12">
        <div>rest is here</div>
      </div>
    </div>
  );
};

export default Footer;
