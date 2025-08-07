// import type { footerDataType } from "../../data/HomePage";
import { exportSvg } from "../../assets/svgs";
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
      <div className=" py-12 mx-12">
        <FooterDestination destination={property.footer_1} />
      </div>

      <div className="p-12">
        <FooterService services={property.footer_2} />
      </div>

      <div
        id="footer-tos"
        className="border-[#ebebeb] border-t-1 px-12 flex justify-between items-center py-6 -translate-y-0.25 cursor-pointer"
      >
        <div
          id="left"
          className="text-[#222222] p-1 -m-1 text-[0.875rem]/[20.2px] flex"
        >
          <div>© 2025 Airbnb, Inc.</div>
          <span className="items-center text-center px-2 align-top flex -translate-y-0.75">
            .
          </span>
          <div>Privacy</div>
          <span className="items-center text-center px-2 align-top flex -translate-y-0.75">
            .
          </span>
          <div>Terms</div>
          <span className="items-center text-center px-2 align-top flex -translate-y-0.75">
            .
          </span>
          <div>Sitemap</div>
          <span className="items-center text-center px-2 align-top flex -translate-y-0.75">
            .
          </span>
          <div>Company details</div>
        </div>
        <div id="right" className="flex items-center h-7.5">
          <div className="-ml-2 max-h-full">
            <button className="py-1.5 px-2 text-[0.875rem]/[1.125rem] mr-1">
              <span className="flex gap-2 flex-row tracking-[0.12px]">
                <img src={exportSvg("worldIcon")} alt="" />
                English (IN)
              </span>
            </button>
            <button className="py-1.5 px-2  -translate-y-1 ">
              <span className="flex gap-2 flex-row text-[0.875rem]/[1.125rem]">
                <span>₹</span>
                <span>INR</span>
              </span>
            </button>
          </div>
          <div className="ml-1 flex items-center">
            <ul className="ml-2 flex gap-5 ">
              <li className="mr-1">
                <img src={exportSvg("fbIcon")} alt="fbIcon" />
              </li>
              <li className="mr-1">
                <img src={exportSvg("xIcon")} alt="xIcon" />
              </li>
              <li className="">
                <img src={exportSvg("igIcon")} alt="igIcon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
