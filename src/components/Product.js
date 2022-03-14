import React from 'react';
import uniqid from 'uniqid';

let Product = ({shoeimg, productName, price, idx, addToCart, pricePure }) => {


    return <div  id = {idx} className='product-item'>
    <img className='shoe-img' src = {shoeimg} alt = "shoe" id = {'img-'+idx}></img>
    <div className='new-sale'>
        Yeni satışa sunuldu
    </div>
    <div className='product-name' id = {'product-name-'+idx}>
        {productName}
    </div>
    <div className='price' id = {'price-'+idx}>
        {price}
    </div>
    <button data-price = {pricePure} onClick={addToCart} id = {idx} className='add-to-cart'>
        Add to Cart
    </button>
</div>
}

export default Product