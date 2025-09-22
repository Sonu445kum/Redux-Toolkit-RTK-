import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "./CartSlice";
import "./Cart.css";

export default function Cart() {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <div className="cart-sidebar">
      <h2 className="cart-title">Your Cart</h2>

      <div className="cart-actions">
        <button onClick={() => dispatch(clearCart())}>Clear All</button>
      </div>

      <div className="cart-summary">
        <span>Total Items: {totalQuantity}</span>
        <span>Total Price: ₹{totalPrice}</span>
      </div>

      <div className="cart-items">
        {items.length === 0 && <p className="empty-cart">Cart is empty</p>}

        {items.map((p) => (
          <div key={p.id} className="cart-card">
            <div className="cart-card-info">
              <h4>{p.title}</h4>
              <p>
                Quantity: {p.quantity} × ₹{p.price}
              </p>
            </div>
            <button
              className="remove-btn"
              onClick={() => dispatch(removeFromCart(p.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
