import React from 'react';
import '.././App.css';


let EmptyGray = ({closeCard}) => {

    return <div onClick={closeCard} className='empty-gray passive'></div>

}
export default EmptyGray