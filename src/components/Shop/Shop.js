import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    // api state
    const [products, setProducts] = useState([]);
// cart add state
    const [cart, setCart] = useState([]);
// product api fetch
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
// cart add click handler
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {/* props product and handler */}
        {
            products.map(product => <Product
                 key={product.id}
                 product={product}
                 handleAddToCart={handleAddToCart}
                 ></Product>)
        }
            </div>
            {/*add product summary  */}
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;