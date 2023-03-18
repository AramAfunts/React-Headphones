import React from "react";

export const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="block">
        <p className="text-white">+001234567890</p>
      </div>
      <div className="block">
        <p className="text-white">Get 50% Off on Selected Items | Shop Now</p>
      </div>
      <div className="flex">
        <img src="img/uk-icon.png" alt="eng" width={25} />
        <p className="text-white ml-2">ENG</p>
      </div>
    </div>
  );
};
