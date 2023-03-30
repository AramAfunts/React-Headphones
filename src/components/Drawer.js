import React from "react";

export const Drawer = ({ cart, onCloseClick }) => {
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="top-block">
          <h1>Cart</h1>
          <img src="img/close.png" alt="close" onClick={onCloseClick} />
        </div>
        <div className="cart-products">
          {cart.map((item) => (
            <div className="cart-item" key={item.key}>
              <img src={item.image} alt="img" />
              <div className="cart-info">
                <p>{item.name}</p>
                <p>{item.price}$</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bottom-block">
          <button>Make an Order</button>
        </div>
      </div>
    </div>
  );
};
