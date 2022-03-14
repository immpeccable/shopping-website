import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './Home.js'
import Products from './Products.js'
import Footer from './components/Footer.js'
import Card from './components/Card.js'
import EmptyGray from './components/EmptyGray'

let totalPurePrice = 0;
console.log("rendered again");

let Main = () => {

    
    let [currentCardItems, setCurrentCardItems] = useState([]);
    let [currentPage, setCurrentPage] = useState('home');

    let handleAddCart = (event) => {
        let id = event.target.id;
        let srcImg = document.getElementById('img-'+id).src;
        let priceVal = document.getElementById('price-'+id).textContent;
        let productNameVal = document.getElementById('product-name-'+id).textContent;
        let pureprice = event.target.dataset.price;
        
        totalPurePrice += parseFloat(pureprice);
        totalPurePrice = Math.round(totalPurePrice * 100) / 100

        document.querySelector('.total-price').textContent = 'Total: ₺'+totalPurePrice;
        setCurrentCardItems([...currentCardItems, {img: srcImg, price: priceVal, productName: productNameVal, purePrice: pureprice, idx: id}])

    }

    let handleProductsClick = () => {
        setCurrentPage('products');
        
        document.querySelector('.header').style.backgroundColor = 'black';
        document.querySelector('.footer').classList.remove('home');
    }

    let handleCountUp = (event) => {

        let howMany = document.getElementById("how-many-"+event.target.id);
        let nmb = parseInt(howMany.textContent);
        nmb++;
        howMany.textContent = nmb;
        totalPurePrice+=parseFloat(howMany.dataset.pure);

        totalPurePrice = Math.round(totalPurePrice * 100) / 100

        document.querySelector('.total-price').textContent = 'Total: ₺'+totalPurePrice;
    }



    let handleCountDown = (event) => {
        let howMany = document.getElementById("how-many-"+event.target.id);
        let nmb = parseInt(howMany.textContent);
        nmb--;
        howMany.textContent = nmb;
        totalPurePrice-=parseFloat(howMany.dataset.pure);

        totalPurePrice = Math.round(totalPurePrice * 100) / 100

        document.querySelector('.total-price').textContent = 'Total: ₺'+totalPurePrice;
    }

    let handleCardClick = () => {

        document.querySelector('.card').classList.remove('passive');
        document.querySelector('.empty-gray').classList.remove('passive');
        
    }
    let closeCard = () => {
        document.querySelector('.empty-gray').classList.add('passive');
        document.querySelector('.card').classList.add('passive');
    }
    let handleHomeClick = () => {
        setCurrentPage('home');
        /*let navButtons = document.querySelectorAll('.nav-button');
        for(let i = 0; i<navButtons.length; i++){
            navButtons[i].classList.remove('product');
        }  */
        document.querySelector('.header').style.backgroundColor = 'inherit';
        document.querySelector('.footer').classList.add('home');
    }

    if(currentPage === 'home'){
        return <div className='home-root'>
            <Header handleCardClick = {handleCardClick} handleHomeClick = {handleHomeClick} handleProductsClick = {handleProductsClick} currentPage = {currentPage}></Header>
            <Home handleProductsClick = {handleProductsClick}></Home>
            <Footer></Footer>
            <Card countUp = {handleCountUp} countDown = {handleCountDown} close = {closeCard} items = {currentCardItems}></Card>
            <EmptyGray closeCard={closeCard}></EmptyGray>
        </div>
    }else{
        return <div className='products-root'>
            <Header handleCardClick = {handleCardClick} handleHomeClick = {handleHomeClick} handleProductsClick = {handleProductsClick}></Header>
            <Products onAdd = {handleAddCart}></Products>
            <Footer></Footer>
            <Card countUp = {handleCountUp} countDown = {handleCountDown} close = {closeCard} items = {currentCardItems}></Card>
            <EmptyGray closeCard={closeCard}></EmptyGray>
        </div>
    }

   
    

}
export default Main;