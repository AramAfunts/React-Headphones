import React from 'react';

export const Card = ({ name, price, image }) => {
  return (
    <div className='card'>
      <div className='image-block'>
        <div className='favorite'>
          <img src='img/heart.png' alt='favorite' />
        </div>
        <div className='image'>
          <img src={image} alt='headphones' />
        </div>
      </div>
      <div className='info-block'>
        <p>{name}</p>
        <p>{price}$</p>
      </div>
      <button>Add to Cart</button>
    </div>
  )
}
