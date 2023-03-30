import React from "react";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";

const Home = ({ products, addToCart, addToFavorites, handleSortingOption, sortingOption, onCartChange }) => {
  return (
    <>
      <div className="wrapper">
        <Hero />
        <Products products={products} addToCart={addToCart} addToFavorites={addToFavorites} handleSortingOption={handleSortingOption} sortingOption={sortingOption} />
      </div>
    </>
  );
};

export default Home;
