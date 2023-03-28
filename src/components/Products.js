import React from "react";
import { Card } from "./Card";

export const Products = ({ products, addToCart, addToFavorites }) => {
  return (
    <div className="products">
      <div className="top-block">
        <h1>Headphones For You!</h1>
        <select>
          <option value="Sort by" disabled>
            Sort by
          </option>
          <option value="Name">Name</option>
          <option value="Price: Lowest to highest">
            Price: Lowest to highest
          </option>
          <option value="Price: Highest to lowest">
            Price: Highest to lowest
          </option>
        </select>
      </div>
      <div className="products-card">
        {products.map((item) => (
          <Card
            key={item.key}
            cardKey={item.key}
            name={item.name}
            price={item.price}
            image={item.image}
            addToCart={(product) => addToCart(product)}
            addToFavorites={(product) => addToFavorites(product)}
          />
        ))}
      </div>
    </div>
  );
};
