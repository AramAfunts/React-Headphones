import React from "react";

export const Card = ({
  cardKey,
  name,
  price,
  image,
  addToCart,
  addToFavorites,
}) => {
  return (
    <div className="card">
      <div className="image-block">
        <div className="favorite">
          <img
            src="img/heart.png"
            alt="favorite"
            title="Add to Favorites"
            onClick={() =>
              addToFavorites({
                key: cardKey,
                name: name,
                price: price,
                image: image,
              })
            }
          />
        </div>
        <div className="image">
          <img src={image} alt="headphones" />
        </div>
      </div>
      <div className="info-block">
        <p>{name}</p>
        <p>{price}$</p>
      </div>
      <button
        onClick={() =>
          addToCart({ key: cardKey, name: name, price: price, image: image })
        }
      >
        Add to Cart
      </button>
    </div>
  );
};
