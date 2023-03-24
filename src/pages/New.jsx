import React from "react";
import { TopBar } from "../components/TopBar";
import { Header } from "../components/Header";

const New = () => {
  return (
    <div className="whats-new-section">
      <TopBar />
      <Header />
      <div className="product">
        <div className="left-side">
          <h2>
            The Best Choice <br /> In The Market
          </h2>
        </div>
        <div className="right-side">
          <img src="img/hero.png" alt="headphones" />
        </div>
      </div>
    </div>
  );
};

export default New;
