import React from 'react';
import '.././App.css';
import shopbag from ".././images/shopping-bag-bag-svgrepo-com.svg"

let Header = ({handleProductsClick, handleCardClick, currentPage, handleHomeClick}) => {



    return <nav className='header'>
        <button onClick={handleHomeClick} className='nav-button'>
            Home
        </button>
        <button onClick={handleProductsClick} className='nav-button'>
            Products
        </button>
        <button onClick={handleCardClick} className='nav-button'>
            <img className='shop-bag' src={shopbag} alt = "wtf is going on"></img>
        </button>
    </nav>
}

export default Header