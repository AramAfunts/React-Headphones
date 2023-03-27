import React from "react";
import { TopBar } from "../components/TopBar";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Card } from '../components/Card';

const Home = ({ products }) => {
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
          <div className="products-card">
            {
              products.map((item) => <Card key={item.key} name={item.name} price={item.price} image={item.image} />)
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
