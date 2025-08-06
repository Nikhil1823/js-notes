import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:8080" });

export const get = async () => {
  const result = await axiosInstance.get("/property/fetch");
  return result.data.data;
};
