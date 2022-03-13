import React from 'react';
import '.././App.css';
import shopbag from ".././images/shopping-bag-bag-svgrepo-com.svg"

let Header = () => {

    return <footer className='footer'>
        <button className='nav-button'>
            Home
        </button>
        <button className='nav-button'>
            Products
        </button>
        <button className='nav-button'>
            <img className='shop-bag' src={shopbag} alt = "wtf is going on"></img>
        </button>
    </footer>
}

export default Header