// import React from 'react'
import type { footerServiceDataType } from "../../data/HomePage";
import FooterServiceItem from "../atoms/FooterServiceItem";

type propType = {
  services: footerServiceDataType[];
};
const FooterService = ({ services }: propType) => {
  console.log("data", services);
  return (
    <div className="grid-cols-3 grid gap-x-4">
      {services.map((service) => {
        return (
          <div>
            <h2 className="mb-4 text-[0.875rem]/[1.125rem] font-medium text-[#222222]">
              {service.title}
            </h2>
            <FooterServiceItem services={service.items} />
          </div>
        );
      })}
    </div>
  );
};

export default FooterService;
