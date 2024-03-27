import React from 'react';

const CarAd = ({ brand, model, year, price, imageUrl }) => {
  return (
    <div className="car-ad">
      <img src={imageUrl} alt={`${brand} ${model}`} />
      <h2>{brand} {model}</h2>
      <p>Year: {year}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default CarAd;
