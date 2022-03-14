import React from 'react';
import shoe1 from './images/shoe1.webp'
import shoe2 from './images/shoe2.webp'
import shoe3 from './images/shoe3.webp'
import shoe4 from './images/shoe4.webp'
import shoe5 from './images/shoe5.webp'
import shoe6 from './images/shoe6.webp'
import shoe7 from './images/shoe7.webp'
import Product from './components/Product'
import uniqid from 'uniqid';

let Products = ({onAdd}) => {

    let productArray = [{img: shoe1, productName: 'Nike Air Max 90', price: '₺1.245,90', pricePure: 1245.90, idx: uniqid()},{img: shoe2, productName: 'Nike Air Max 90', price: '₺2.421,90', pricePure: 2421.90, idx: uniqid()},{img: shoe3, productName: 'Nike Air Max 90', price: '₺4.259,90', pricePure: 4259.90, idx: uniqid()},{img: shoe4, productName: 'Nike Air Max 90', price: '₺979,90', pricePure: 979.90, idx: uniqid()},{img: shoe5, productName: 'Nike Air Max 90', price: '₺1.679,90', pricePure: 1679.90, idx: uniqid()},{img: shoe6, productName: 'Nike Air Max 90', price: '₺2.475,90', pricePure: 2475.90, idx: uniqid()},{img: shoe7, productName: 'Nike Air Max 90', price: '₺3.679,90', pricePure: 3679.90, idx: uniqid()} ]
    return <div className='products-grid'>
        {productArray.map((el) => {
            return <Product pricePure = {el.pricePure} addToCart = {onAdd} idx = {el.idx} shoeimg = {el.img} productName = {el.productName} price = {el.price}></Product>
        })}
        
    </div>
} 

export default Products