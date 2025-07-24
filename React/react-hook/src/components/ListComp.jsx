import React, { useState } from "react";

const ListComp = () => {
 
  const [listItem, setListItem] = useState([]);
  const [item, setItem] = useState("");
  return (
    <div className="wrapper">
      <div>
        <label htmlFor="">Enter a fruit</label>
        <input
          type="text"
          name=""
          id=""
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button
          onClick={() => {
            setListItem([...listItem, item]);
            setItem("");
          }}
        >
          Add to List
        </button>
      </div>
      <ul>
        {listItem.map((item, index) => {
           return item.length > 0 ? <li key={index}>{item}</li> : "";
        })}
     
      </ul>
    </div>
  );
};

export default ListComp;
