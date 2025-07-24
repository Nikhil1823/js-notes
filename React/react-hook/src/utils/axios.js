import axios from "axios";

const fetchData = async (userId = "") => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    );
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};

const passData = async () => {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts");
    return res.data;
  } catch (e) {
    console.log(e.message);
  }
};

export { fetchData, passData };
