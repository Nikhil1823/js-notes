// import React from 'react'
import type { footerServiceDataType } from "../../data/HomePage";

type propType = {
  services: footerServiceDataType[];
};
const FooterService = ({ services }: propType) => {
  console.log("data", services);
  return (
    <div className="grid-cols-3">
      {services.map((service) => {
        return <h2>{service.title}</h2>;
      })}
    </div>
  );
};

export default FooterService;
