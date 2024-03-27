import React from 'react';
import CarAd from '../components/CarAd';
import VideoAd from '../components/VideoAd';

const Home = () => {
  return (
    <div className="home-page">
      <h1>Car Advertisement App</h1>
      <div className="car-list">
        <CarAd
          brand="Toyota"
          model="Camry"
          year={2022}
          price="$25,000"
          imageUrl="https://carindia.in/wp-content/uploads/2023/11/Toyota-Camry_Hybrid-2025-1024-01-2-640x444.jpg"
        />
        <CarAd
          brand="Honda"
          model="Accord"
          year={2021}
          price="$23,500"
          imageUrl="https://hondapape.mx/images/autos/accord/banner.jpeg"
        />
        <VideoAd
          brand="Ford"
          model="Mustang"
          year={2023}
          price="$30,000"
          videoUrl="https://youtu.be/wzEN_g_hPdQ?si=u1hkgvV5bsRRX-Ia"
        />
      </div>
    </div>
  );
}

export default Home;
