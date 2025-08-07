export const formatBulkData = (data: PropertyDataType[], limit = 8) => {
  let result = [];
  console.log("what i got here", data);

  for (let i = 0; i < data.length; i += limit) {
    let items = data.slice(i, i + limit);
    result.push({
      title: "Popular homes in Bengaluru",
      items,
    });
  }
  return result;
};

export type PropertyListDataType = {
  title: string;
  items: PropertyDataType[];
};

export type PropertyDataType = {
  id: string;
  property_type: string;
  tag: string;
  price: string;
  duration: string;
  duration_type: string;
  rating: string;
  address: string;
  buttonType: string;
  is_liked: boolean;
  location: string;
  images: string[];
};
