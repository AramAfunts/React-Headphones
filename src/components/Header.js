import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <div className="flex cursor-pointer">
          <img className="store" src="img/store.png" alt="store" />
          <h1 className="header-title">Shopcart</h1>
        </div>
      </Link>
      <div>
        <ul className="nav">
          <Link to="/deals">
            <li>Deals</li>
          </Link>
          <Link to="/new">
            <li>What's new</li>
          </Link>
          <Link to="/delivery">
            <li>Delivery</li>
          </Link>
        </ul>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search products..."
          className="search"
        />
      </div>
      <div className="header-right">
        <ul className="flex">
          <Link to="/account">
            <li className="flex mx-4 cursor-pointer">
              <img className="mr-2" src="img/account.png" alt="account" />{" "}
              <p>Account</p>
            </li>
          </Link>
          <li className="flex mx-4 cursor-pointer">
            <img className="mr-2" src="img/cart.png" alt="cart" /> <p>Cart</p>
          </li>
        </ul>
      </div>
    </header>
  );
};
