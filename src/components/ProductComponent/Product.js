import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { DataContext } from '../../contexts/DataProvider';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import './Product.css'; // Regular CSS import

const Product = ({ product }) => {
  const { addToCart } = useContext(DataContext);

  return (
    <div className="product"> {/* Use class names directly */}
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
        <div className="info"> {/* Use class names directly */}
          <p>{product.title}</p>
          <CurrencyFormat value={product.price} />
        </div>
      </Link>
      <button onClick={() => addToCart(product)}><FaShoppingCart /> Add to Cart</button>
    </div>
  );
};

export default Product;
