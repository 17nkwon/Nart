import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function Product(props) {
    const { product } = props;
    return (
        <div key={product.id} className="card">
            { /*use Link instead of anchor because it refreshes the page when we click on a product*/}
            <Link to={`/product/${product.id}`}><img className="medium" src={product.image} alt={product.name} /></Link>
            <div className="card-body">
                <Link to="product.html"><h2>{product.name}</h2></Link>
                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                <div className="price">${product.price}</div>
            </div>
        </div>
    );
}