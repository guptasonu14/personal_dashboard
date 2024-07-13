// src/components/Dashboard.js
import React from 'react';
import Weather from './Weather';
import News from './News';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>𝒫𝑒𝓇𝓈𝑜𝓃𝒶𝓁 𝒟𝒶𝓈𝒽𝒷𝑜𝒶𝓇𝒹</h1>
      <div className="widgets">
        <Weather />
        <News />
      </div>
    </div>
  );
};

export default Dashboard;
