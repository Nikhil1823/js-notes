import React, { useState, useReducer } from "react";
import CartItemComp from "./CartItemComp";
export const ACTIONS = {
  ADD: "add",
  REMOVE: "remove",
  INCREASE: "increase_quantity",
  DECREASE: "decrease_quantity",
};
const addItem = (data) => {
  return { ...data, id: Date.now() };
};

const reducer = (prevState, action) => {
  switch (action.type) {
    case ACTIONS.ADD:
      return [...prevState, addItem(action.payload)];

    case ACTIONS.REMOVE:
      return [
        ...prevState.filter(
          (shoppingCart) => shoppingCart.id != action.payload.id
        ),
      ];

    case ACTIONS.INCREASE:
      return prevState.reduce((prev, curr) => {
        if (curr.id == action.payload.id) {
          curr.quantity += 1;
        }
        prev.push(curr);
        return prev;
      }, []);

    case ACTIONS.DECREASE:
      return prevState.reduce((prev, curr) => {
        if (curr.id == action.payload.id) {
          curr.quantity -= 1;
        }
        prev.push(curr);
        return prev;
      }, []);
  }
};
const ShoppingCartComp = () => {
  const [title, setTitle] = useState("");
  const [shoppingCart, dispatch] = useReducer(reducer, []);
  const styles = {
    input: { width: "90%", height: "100%" },
    div: {
      whiteSpace: "nowrap",
      boxSizing: "border-box",
      verticalAlign: "center",
    },
    button: {
      width: "auto",
      margin: "0 0 0 8px",
      marginLeft: "8px",
      height: "100%",
    },
  };

  return (
    <div>
      <div className="input" style={styles.div}>
        <input
          type="text"
          name=""
          placeholder="Enter a item"
          id=""
          style={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="add"
          style={styles.button}
          onClick={() => {
            dispatch({ type: ACTIONS.ADD, payload: { title, quantity: 1 } });
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
      {shoppingCart.length <= 0 ? (
        <h4>Add some thing into your cart</h4>
      ) : (
        <ul>
          <CartItemComp shoppingCart={shoppingCart} dispatch={dispatch} />
        </ul>
      )}
    </div>
  );
};

export default ShoppingCartComp;
