import React from 'react';
import '.././App.css';
import shoe1 from '.././images/shoe1.webp'
import CardItem from '../components/CardItem'

let Card = ({ items, close, countUp, countDown}) => {

    console.log(items);
    return <div className='card passive'>
        <div className='main-text'>
            Your shopping cart 
        </div>

        <div className='card-grid'>
            {items.map((el) => {
                return <CardItem idx = {el.idx} purePrice = {el.purePrice} countUp = {countUp} countDown = {countDown} shoeimg = {el.img} productName = {el.productName} price = {el.price} ></CardItem>
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