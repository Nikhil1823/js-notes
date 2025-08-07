import React from "react";
import type { PropertyDataType } from "../../utils/dataFormater";
import ProductCard from "./ProductCard";

type productPropType = {
  items: PropertyDataType[];
};

const CardStrip: React.FC<productPropType> = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return <ProductCard product={item} key={item.id} />;
      })}
    </>
  );
};

export default CardStrip;
