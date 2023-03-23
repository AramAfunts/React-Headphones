import React from "react";
import { TopBar } from "../components/TopBar";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <div className="wrapper">
        <Hero />
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
        </div>
      </div>
    </>
  );
};

export default Home;
