import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:8080" });

export const get = async () => {
  console.log("refetching ....");

  const result = await axiosInstance.get("/property/fetch");
  return result.data.data;
};

export const postData = async (data: {}, id: string) => {
  console.log("posting ...");
  // console.log("gotten data", data, id);

  const result = await axiosInstance.post("/property/update", { data, id });
  return result.data;
};
