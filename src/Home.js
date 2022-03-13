import React from 'react';
import './App.css';
import Header from './components/Header'

let Home = () => {




    return <div className = "home-root">
        <Header></Header>
        <div className = "home-info-div">
            <div className='main-info'>
                Nike New Models
            </div>
            <div className='little-info'>
                Now available for preorder, shop now!
            </div>
            <button className='buy-button'>
                SHOP NOW
            </button>
        </div>
    </div>

}
export default Home;
