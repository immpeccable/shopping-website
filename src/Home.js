import React from 'react';
import './App.css';
let Home = ({handleProductsClick}) => {



    

    return  <div className = "home-info-div">
            <div className='main-info'>
                Nike New Models
            </div>
            <div className='little-info'>
                Now available for preorder, shop now!
            </div>
            <button onClick={handleProductsClick} className='buy-button'>
                SHOP NOW
            </button>
        </div>

}
export default Home;
