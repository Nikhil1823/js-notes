// import type { footerDataType } from "../../data/HomePage";
import { exportFooterData } from "../../data/HomePage";
import FooterDestination from "../molecules/FooterDestination";
import FooterService from "../molecules/FooterService";

const property = exportFooterData();
const Footer = () => {
  {
    console.log(property.footer_2);
  }
  return (
    <div className="w-full mt-12.25 bg-[#f7f7f7]">
      <div className="top py-12 mx-12">
        <FooterDestination destination={property.footer_1} />
      </div>

      <div className="p-12">
        <FooterService services={property.footer_2} />
      </div>
    </div>
  );
};

export default Footer;
