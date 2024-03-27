import React from 'react';

const VideoAd = ({ brand, model, year, price, videoUrl }) => {
  return (
    <div className="video-ad">
      <video controls>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>{brand} {model}</h2>
      <p>Year: {year}</p>
      <p>Price: {price}</p>
    </div>
  );
}

export default VideoAd;
