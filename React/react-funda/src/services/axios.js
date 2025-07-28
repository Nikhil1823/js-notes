import axios from "axios";

const getData = async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};
const passData = async (data) => {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};

export { getData, passData };
