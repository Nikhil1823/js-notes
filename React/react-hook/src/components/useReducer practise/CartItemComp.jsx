import React from "react";
import "../../styles/cart.css";
import { ACTIONS } from "./ShoppingCartComp";
const CartItemComp = ({ shoppingCart, dispatch }) => {
  console.log("cart", shoppingCart);

  return (
    <div>
      {shoppingCart.map((cart) => {
        return (
          <li key={cart.id}>
            <div className="cart-wrapper">
              <p>{cart.title}</p>
              <span className="quan">Quantity : {cart.quantity}</span>
              <div className="button-wrapper">
                <button
                  className="add"
                  onClick={() =>
                    dispatch({
                      type: ACTIONS.INCREASE,
                      payload: { id: cart.id },
                    })
                  }
                >
                  +
                </button>
                <button
                  className="minus"
                  disabled={cart.quantity <= 0}
                  style={{
                    opacity: cart.quantity <= 0 ? 0.3 : 1,
                    cursor: cart.quantity <= 0 ? "not-allowed" : "pointer",
                  }}
                  onClick={() =>
                    dispatch({
                      type: ACTIONS.DECREASE,
                      payload: { id: cart.id },
                    })
                  }
                >
                  -
                </button>
              </div>
            </div>
            <button
              className="remove"
              onClick={() =>
                dispatch({ type: ACTIONS.REMOVE, payload: { id: cart.id } })
              }
            >
              Remove item
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default CartItemComp;
