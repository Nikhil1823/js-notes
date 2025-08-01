// import React from "react";
import ProductCarousel from "./ProductCarousel";
import { exportData } from "../../data/HomePage";
const ResultContainer = () => {
  const cards = exportData();
  console.log(cards[0]);

  return (
    <div>
      <ProductCarousel items={cards[0].items} />
    </div>
  );
};

export default ResultContainer;
