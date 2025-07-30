import { useEffect, useState } from "react";
import RenderData from "./RenderData";
import userForm from "../custom hooks/userForm";
import axios from "axios";
const FetchData = () => {
  const [data, setData] = useState([]);
  const [title, titleConfig] = userForm();
  const [userId, userIdConfig] = userForm();
  const [body, bodyConfig] = userForm();

  useEffect(() => {
    console.log("calling use effect");

    const fetch = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => console.error(e.message));
    };
    fetch();
  }, []);

  const handleSubmit = (): void => {
    if (userId.length <= 0 || title.length <= 0 || body.length <= 0) {
      alert("enter complete data to post ...");
      return;
    }

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        userId,
      })
      .then((_) => alert("data send successfully"))
      .catch((e) => console.error(e.message));
  };
  return (
    <div>
      <div className="input">
        <label htmlFor="">Enter your userId</label>
        <input type="text" name="" id="" {...userIdConfig} />
      </div>
      <div className="input">
        <label htmlFor="">Enter your Title</label>
        <input type="text" name="" id="" {...titleConfig} />
      </div>
      <div className="input">
        <label htmlFor="">Enter your body</label>
        <input type="text" name="" id="" {...bodyConfig} />
      </div>
      <button onClick={handleSubmit}>Send Data</button>

      {data.length > 0 ? (
        <RenderData data={data} />
      ) : (
        <h2>Nothing to display</h2>
      )}
    </div>
  );
};

export default FetchData;
