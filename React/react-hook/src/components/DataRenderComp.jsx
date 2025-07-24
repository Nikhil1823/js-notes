import React, { useState, useEffect } from "react";
import { fetchData } from "../utils/axios";

const DataRenderComp = (props) => {
  let [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("goint to rerednder");

    setData(props.data);
  }, [props.data]);
  if (error) {
    return <p>Some error occured </p>;
  }
  if (data.length <= 0) {
    return <h1>Nothing to display</h1>;
  }
  if (!Array.isArray(data)) {
    data = Array(data);
  }
  return (
    <>
      {console.log("going to paint again")}
      <h3>Total number of people in the post : {data.length}</h3>
      <ul>
        {data.map((item) => {
          return (
            <li key={item.id}>
              <h2>{item.title}</h2>
              <h4>{item.body}</h4>
              <p>Posted by user with id : {item.userId}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default DataRenderComp;
