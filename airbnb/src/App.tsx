// import FavoriteLabel from "./Components/Atoms/FavoriteLabel";
// import WishIcon from "./Components/Atoms/WishIcon";
// import ProductCard from "./Components/Molecules/ProductCard";
import Header from "./Components/organisms/Header";
import ProductCarousel from "./Components/organisms/ProductCarousel";
// import ProductCarousel from "./Components/Organisms/ProductCarousel";
// import ResultContainer from "./Components/organisms/ResultContainer";
import { exportData } from "./data/HomePage";
import type { HomeDataType } from "./data/HomePage";
import { createContext, useState, useRef } from "react";
export const dataContext = createContext<ContextType | null>(null);
type ContextType = {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};
function App() {
  const [selected, setSelected] = useState(0);
  const data = useRef<HomeDataType[]>(exportData());

  return (
    <>
      <dataContext.Provider value={{ selected, setSelected }}>
        <Header data={data.current} />
        <ProductCarousel items={data.current[selected]?.items} />
      </dataContext.Provider>
    </>
  );
}

export default App;
