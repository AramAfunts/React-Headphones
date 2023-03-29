import React from "react";
import { TopBar } from "../components/TopBar";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";

const Home = ({ products, addToCart, addToFavorites, handleSortingOption, sortingOption }) => {
  return (
    <>
      <TopBar />
      <Header />
      <div className="wrapper">
        <Hero />
        <Products products={products} addToCart={addToCart} addToFavorites={addToFavorites} handleSortingOption={handleSortingOption} sortingOption={sortingOption} />
      </div>
    </>
  );
};

export default Home;
