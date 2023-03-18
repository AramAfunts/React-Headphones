import React from 'react';

export const Header = () => {
  return (
    <header>
        <div className="flex cursor-pointer">
          <img className="store" src="img/store.png" alt="store" />
          <h1 className="header-title">Shopcart</h1>
        </div>
        <div>
          <ul className="nav">
            <li>Deals</li>
            <li>What's new</li>
            <li>Delivery</li>
          </ul>
        </div>
        <div>
          <input type='text' placeholder="Search products..." className="search" />
        </div>
        <div className="header-right">
          <ul className="flex">
            <li className="flex mx-4 cursor-pointer">
              <img className="mr-2" src="img/account.png" alt="account" /> <p>Account</p>
            </li>
            <li className="flex mx-4 cursor-pointer">
              <img className="mr-2" src="img/cart.png" alt="cart" /> <p>Cart</p>
            </li>
          </ul>
        </div>
    </header>
  )
}
