import Footer from "./Components/organisms/Footer";
import Header from "./Components/organisms/Header";
import ProductCarousel from "./Components/organisms/ProductCarousel";
import { exportData } from "./data/HomePage";
import type { HomeDataType } from "./data/HomePage";
import { formatBulkData } from "./utils/dataFormater";
import { get } from "./utils/fecthData";
import { createContext, useState, useRef } from "react";
export const dataContext = createContext<ContextType | null>(null);
import { useQuery } from "react-query";
import type {
  PropertyDataType,
  PropertyListDataType,
} from "./utils/dataFormater";
type ContextType = {
  selected: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
};
function App() {
  const [selected, setSelected] = useState(0);
  const datas = useRef<HomeDataType[]>(exportData());

  const { isLoading, data, isSuccess } = useQuery<PropertyDataType[]>({
    queryKey: "properties",
    queryFn: get,
  });

  if (isLoading) return <h1>Loading ....</h1>;

  const formattedData: PropertyListDataType[] = isSuccess
    ? formatBulkData(data)
    : [];

  return (
    <dataContext.Provider value={{ selected, setSelected }}>
      <Header data={datas.current} />
      {formattedData?.map((item, i) => {
        return <ProductCarousel properties={item} key={i} />;
      })}
      <Footer />
    </dataContext.Provider>
  );
}

export default App;
