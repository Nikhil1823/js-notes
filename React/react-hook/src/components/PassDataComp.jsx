import React, { useEffect, useState } from "react";
import DataRenderComp from "./DataRenderComp";
import { fetchData, passData } from "../utils/axios";

const PassDataComp = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {}, [data]);
  const fetchAllData = (Alert) => {
    if (Alert && !id) {
      return alert("Enter an user ID to check");
    }

    fetchData(id)
      .then((res) => setData(res))
      .catch((e) => setError(e));
    setId("");
  };

  const filterMine = () => {
    if (data.length < 10 || !Array.isArray(data)) {
      alert("Fetch all the responses first");
      return;
    }
    if (id.length <= 0) {
      alert("Enter a valid user id first");
      return;
    }

    setData(data.filter((item) => item.userId == id));
  };
  const sendData = () => {
    if (id.length <= 0 || body.length <= 0 || title.length <= 0) {
      return alert("please complete the required fields");
    }
    passData({ id, title, body })
      .then((_) => alert("Data send successfully"))
      .catch((e) => setError(e));
    setTitle("");
    setBody("");
    setId("");
  };
  if (error) return <p>Some Error happened</p>;

  return (
    <div>
      <div className="title">
        <label htmlFor="">Enter the title :</label>
        <input
          type="text"
          name=""
          id=""
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <br />
      <div className="body">
        <label htmlFor="">Enter a body : </label>
        <input
          type="text"
          name=""
          id=""
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <br />
      <div className="userId">
        <label htmlFor="">Enter Your UserId : </label>
        <input
          type="text"
          name=""
          id=""
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <br />
      <div>
        <button id="mine" onClick={() => fetchAllData(true)}>
          Fetch With Id
        </button>
        <button id="send" onClick={sendData}>
          Send
        </button>
        <button id="fetch-all" onClick={() => fetchAllData(false)}>
          Fetch All Data
        </button>
        <button onClick={filterMine}> Filter My Result</button>
      </div>

      {<DataRenderComp data={data} />}
    </div>
  );
};

export default PassDataComp;
