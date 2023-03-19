import React from "react";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="left-side">
        <h1 className="hero-text">
          Grab Upto 50% Off On
          <br /> Selected Items
        </h1>
        <button className="hero-btn">Buy Now</button>
      </div>
      <div className="right-side">
        <img src="img/hero.png" alt="hero" />
      </div>
    </div>
  );
};
