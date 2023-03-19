import React from "react";
import { TopBar } from "./components/TopBar";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <div className="wrapper">
        <Hero />
        <div className="products">
          <div className="top-block">
            <h1>Headphones For You!</h1>
            <select>
              <option value="Sort by" disabled>Sort by</option>
              <option value="Name">Name</option>
              <option value="Price: Lowest to highest">
                Price: Lowest to highest
              </option>
              <option value="Price: Highest to lowest">
                Price: Highest to lowest
              </option>
            </select>
          </div>
          {/* <div className="products-list">
            <div className="product-card">
              <div className="product-image">
                <img src="img/hero.png" alt="item" />
              </div>
              <div className="mt-2 mx-1 text-black">
                <div className="justify-between flex font-extrabold text-sm">
                  <span>Airpods Pro</span>
                  <p>59.99$</p>
                </div>
                <p className="text-sm mt-2">Apple Inc.</p>
                <button className="border border-black rounded-3xl py-2 px-4 mt-4 hover:bg-green-700">Add to Cart</button>
              </div>
            </div>  
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
