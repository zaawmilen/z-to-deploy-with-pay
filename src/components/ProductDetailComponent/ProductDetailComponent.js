import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from './contexts/DataProvider';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import './ProductDetailComponent.css';

const ProductDetailComponent = () => {
  const { id } = useParams();
  const { products } = useContext(DataContext);
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} />
      <div className="details">
        <h2>{product.name}</h2>
        <CurrencyFormat value={product.price} />
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetailComponent;
