import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';


const Beauty = () => {
    return (
      <div className="beauty-section">
        <Navbar/>
        <Header/>
        <h1>Category:</h1> <br />
        <h2>Skincare</h2>
      </div>
    )
}

export default Beauty;