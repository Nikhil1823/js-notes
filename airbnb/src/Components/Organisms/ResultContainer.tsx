// import React from "react";
import ProductCarousel from "./ProductCarousel";
import { exportData } from "../../data/HomePage";
import { LeftArrow } from "../../assets/svgs/index";
const ResultContainer = () => {
  const cards = exportData();
  console.log(cards[0]);

  return (
    <div>
      <img src={LeftArrow} alt="" />
      <ProductCarousel items={cards[0].items} />
    </div>
  );
};

export default ResultContainer;
