import React from 'react';
import './Profile.css'; // Import your CSS file for styling


function Profile() {
  return (
    <div className="profile-container">
      <div className="carousel">
        {/* Here, you can use React Slick or any other carousel library to display swiping images */}
        {/* Example using divs with background images */}
        <div className="slide" style={{backgroundImage: `url('https://stimg.cardekho.com/images/car-images/930x620/Ford/Ford-Mustang/3835/ford-mustang-yellow-tricoat_eda600.jpg?tr=w-898')`}}></div>
        <div className="slide" style={{backgroundImage: `url('https://stimg.cardekho.com/images/car-images/930x620/Ford/Ford-Mustang/3835/ford-mustang-absolute-black_1a1a1a.jpg?tr=w-898')`}}></div>
        <div className="slide" style={{backgroundImage: `url('https://stimg.cardekho.com/images/car-images/930x620/Ford/Ford-Mustang/3835/ford-mustang-race-red_c61008.jpg?tr=w-898')`}}></div>
        {/* Add more slides as needed */}
      </div>
      <div className="profile-content">
      
      </div>
    </div>
  );
}

export default Profile;
