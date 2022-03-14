import React from 'react';
import '.././App.css';

let CardItem = ({shoeimg, productName, price, countDown, countUp, purePrice, idx}) => {


    return  <div className='card-item'>
    <img className='card-img' src = {shoeimg} alt = 'shoeimg'></img>

    <div className='card-item-right-side'>
        <div className='product-name'>
            {productName}
        </div>
        <div className='price'>
            {price}
        </div>

        <div className='arrange-count'>
            <button data-pure = {purePrice} id = {idx} onClick={countDown} className='count-down-button'>
                -
            </button>
            <div data-pure = {purePrice} id = {'how-many-'+idx} className='how-many'>1</div>
            <button data-pure = {purePrice} id = {idx} onClick={countUp} className='count-up-button'>
                +
            </button>
        </div>
    </div>
</div>

}
export default CardItem
