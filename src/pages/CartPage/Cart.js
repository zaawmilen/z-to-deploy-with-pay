import React from 'react';
import { useDataContext } from '../../contexts/DataProvider';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { state, dispatch } = useDataContext();

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const increaseQuantity = (id) => {
    dispatch({ type: 'INCREASE_QUANTITY', payload: id });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: id });
  };

  const total = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {state.cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {state.cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <p className="cart-item-title">{item.title}</p>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
            <Link to="/order">
              <button className="checkout-button">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
