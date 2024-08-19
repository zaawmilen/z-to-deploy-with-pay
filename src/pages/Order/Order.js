import React from 'react';
import { useDataContext } from '../../contexts/DataProvider';
import { useNavigate } from 'react-router-dom';
import './Order.css';

const Order = () => {
  const { state, dispatch } = useDataContext();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    localStorage.setItem('orderItems', JSON.stringify(state.cart));
    navigate('/checkout');
  };

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const totalSum = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="order">
      <h1>Order Summary</h1>
      <ul>
        {state.cart.map((item) => (
          <li key={item.id} className="order-item">
            <img src={item.image} alt={item.title} className="order-item-image" />
            <div className="order-item-details">
              <p className="order-item-title">{item.title}</p>
              <p className="order-item-price">Price: ${item.price}</p>
              <div className="order-item-quantity">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <p className="order-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="order-total">
        <h2>Total Sum: ${totalSum.toFixed(2)}</h2>
      </div>
      <button onClick={handlePlaceOrder} className="place-order-button">Place Order</button>
    </div>
  );
};

export default Order;
