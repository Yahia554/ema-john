import React from 'react';
// icon import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {name, img , price , seller , ratings} = props.product
    return (
        // product cart detail
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-text'>
                <p className='product-name'>{name}</p>
                <p> Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} star</small></p>
            </div>
            {/* add onclick handler btn */}
            <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                {/* icon add */}
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;