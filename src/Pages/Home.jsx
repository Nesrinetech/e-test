import React from 'react'
import './Home.css';
import Popular from '../Components/Popular/Popular'; // Import Popular
import Browse from '../Components/Browse/Browse';
import NewCollections from '../Components/NewCollections/NewCollections';


const Home = () => { 
  return (
    <div className='home'>
        <div className="home-left">
            <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
            <div>
                <div className="hand-hand-icon">
                    <p1>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p1>
              
                </div>

                <div className="home-btn">
                    <button className="btn">Shop Now</button>

                </div>
            </div>


            <div className="number-section">
                <div className="section1">
                    <h1>200+</h1>
                    <p>International Brands</p>
                </div>
                <div className="section2">
                    <h1>2,000+</h1>
                    <p>High-Quality Products</p>
                </div>
                <div className="section3">
                    <h1>30,000+</h1>
                    <p>Happy Customers</p>
                </div>

            </div>

        </div>

        <Popular />
        <Browse />
        <NewCollections/>




 </div>
  )
}

export default Home