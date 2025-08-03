import Footer from "./Components/organisms/Footer";
import Header from "./Components/organisms/Header";
import ProductCarousel from "./Components/organisms/ProductCarousel";
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
    <dataContext.Provider value={{ selected, setSelected }}>
      <Header data={data.current} />
      {data.current[selected]?.items.map((item, i) => {
        return <ProductCarousel items={item} key={i + item.title} />;
      })}
      <Footer />
    </dataContext.Provider>
  );
}

export default App;
