import React from "react";
import type { productType } from "../../data/HomePage";
import ProductCard from "./ProductCard";

type productPropType = {
  items: productType[];
};

const CardStrip: React.FC<productPropType> = ({ items }) => {
  return (
    <>
      {items.map((item, i) => {
        return <ProductCard product={item} key={i + item.offer} />;
      })}
    </>
  );
};

export default CardStrip;
