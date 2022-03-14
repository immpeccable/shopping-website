import React from 'react';
import '.././App.css';
import CardItem from '../components/CardItem'

let Card = ({ items, close, countUp, countDown, currentPage}) => {

    console.log(document.querySelector('.card-grid'));
    if(document.querySelector('.card') != null){
        console.log("hello worlddd!!")
        if(items.length === 0){
            document.querySelector('.card-grid').classList.add('passive');
        }else{
            document.querySelector('.card-grid').classList.remove('passive');
        }
    }
    /*console.log("items:");
    console.log(items);*/
    /*if(items.length === 0){
        if(currentPage == 'products'){
            document.querySelector('.card-grid').classList.add('passive');
        }
    }
    else{
        if(currentPage == 'home'){
            document.querySelector('.card-grid').classList.remove('passive');
        }
    }*/
    return <div className='card passive'>
        <div className='main-text'>
            Your shopping cart 
        </div>

        <div className='card-grid passive'>
            
            {items.map((el) => {
                return <CardItem howMany = {el.howMany} idx = {el.idx} purePrice = {el.purePrice} countUp = {countUp} countDown = {countDown} shoeimg = {el.img} productName = {el.productName} price = {el.price} ></CardItem>
            })}
           
        </div>

        <div className='total-price'></div>

        <button className='checkout-button'>
            Checkout
        </button>

        <button onClick = {close} className='close-button'>
            Close
        </button>
    </div>
}
export default Card 