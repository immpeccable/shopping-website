import React from 'react';
import uniqid from 'uniqid';
import Product from './components/Product'

let Products = ({onAdd, productArray}) => {

    
    return <div className='products-grid'>
        {productArray.map((el) => {
            return <Product pricePure = {el.pricePure} addToCart = {onAdd} idx = {el.idx} shoeimg = {el.img} productName = {el.productName} price = {el.price}></Product>
        })}
        
    </div>
} 

export default Products