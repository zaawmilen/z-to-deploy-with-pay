import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDataContext } from '../../contexts/DataProvider';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // State for quantity
  const {  dispatch } = useDataContext();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } });
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p className="price">${product.price}</p>
        <div className="quantity-control">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
