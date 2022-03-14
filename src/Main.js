import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Home from './Home.js'
import Products from './Products.js'
import Footer from './components/Footer.js'
import Card from './components/Card.js'
import EmptyGray from './components/EmptyGray'
import shoe1 from './images/shoe1.webp'
import shoe2 from './images/shoe2.webp'
import shoe3 from './images/shoe3.webp'
import shoe4 from './images/shoe4.webp'
import shoe5 from './images/shoe5.webp'
import shoe6 from './images/shoe6.webp'
import shoe7 from './images/shoe7.webp'
import uniqid from 'uniqid';

let totalPurePrice = 0;
let productArray = [{img: shoe1, productName: 'Nike Air Max 90', price: '₺1.245,90', pricePure: 1245.90, idx: uniqid()},{img: shoe2, productName: 'Nike Air Max 90', price: '₺2.421,90', pricePure: 2421.90, idx: uniqid()},{img: shoe3, productName: 'Nike Air Max 90', price: '₺4.259,90', pricePure: 4259.90, idx: uniqid()},{img: shoe4, productName: 'Nike Air Max 90', price: '₺979,90', pricePure: 979.90, idx: uniqid()},{img: shoe5, productName: 'Nike Air Max 90', price: '₺1.679,90', pricePure: 1679.90, idx: uniqid()},{img: shoe6, productName: 'Nike Air Max 90', price: '₺2.475,90', pricePure: 2475.90, idx: uniqid()},{img: shoe7, productName: 'Nike Air Max 90', price: '₺3.679,90', pricePure: 3679.90, idx: uniqid()} ]

let Main = () => {

    
    
    let [currentCardItems, setCurrentCardItems] = useState([]);
    let [currentPage, setCurrentPage] = useState('home');

    let handleAddCart = (event) => {
        let id = event.target.id;
        //console.log("evnet id: "+id);

        let doesHave = false;

        setCurrentCardItems(currentCardItems.map((el) => {
            if(el.idx === id){
                let hm = el.howMany + 1;
                //console.log("hm: "+hm);
                doesHave = true;
                return {...el, howMany: hm}
            }else{
                //console.log("buraya igigrg");
                return el;
            }
        }))
       // console.log(currentCardItems)
        

        //console.log("can you pass here");
        
        
        let pureprice = event.target.dataset.price;
        
        totalPurePrice += parseFloat(pureprice);
        totalPurePrice = Math.round(totalPurePrice * 100) / 100

        document.querySelector('.total-price').textContent = 'Total: ₺'+totalPurePrice;
        if(doesHave){
            return;
        }
        let srcImg = document.getElementById('img-'+id).src;
        let priceVal = document.getElementById('price-'+id).textContent;
        let productNameVal = document.getElementById('product-name-'+id).textContent;
        setCurrentCardItems([...currentCardItems, {img: srcImg, price: priceVal, productName: productNameVal, purePrice: pureprice, idx: id, howMany: 1}])

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

        setCurrentCardItems(currentCardItems.map((el) => {
            if(event.target.id === el.idx){
                let hm = el.howMany+1;
                return {...el, howMany: hm}
            }else{
                return el;
            }
        }))

        document.querySelector('.total-price').textContent = 'Total: ₺'+totalPurePrice;
    }



    let handleCountDown = (event) => {
        let howMany = document.getElementById("how-many-"+event.target.id);
        let nmb = parseInt(howMany.textContent);
        nmb--;
        
        totalPurePrice-=parseFloat(howMany.dataset.pure);
        totalPurePrice = Math.round(totalPurePrice * 100) / 100

        if(nmb === 0){
            setCurrentCardItems(currentCardItems.filter((el) => {
                return el.idx !== event.target.id;
            }))

            console.log("current card items")
            console.log(currentCardItems)
        }else{
            howMany.textContent = nmb;
            setCurrentCardItems(currentCardItems.map((el) => {
                if(el.idx === event.target.id){
                    let hm = el.howMany - 1;
                    return {...el, howMany: hm}
                }else{
                    return el;
                }
            }))
            console.log("current card items2")
            console.log(currentCardItems)
        }


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
            <Card currentPage={currentPage} countUp = {handleCountUp} countDown = {handleCountDown} close = {closeCard} items = {currentCardItems}></Card>
            <EmptyGray closeCard={closeCard}></EmptyGray>
        </div>
    }else{
        return <div className='products-root'>
            <Header handleCardClick = {handleCardClick} handleHomeClick = {handleHomeClick} handleProductsClick = {handleProductsClick}></Header>
            <Products productArray={productArray} onAdd = {handleAddCart}></Products>
            <Footer></Footer>
            <Card currentPage={currentPage} countUp = {handleCountUp} countDown = {handleCountDown} close = {closeCard} items = {currentCardItems}></Card>
            <EmptyGray closeCard={closeCard}></EmptyGray>
        </div>
    }

   
    

}
export default Main;