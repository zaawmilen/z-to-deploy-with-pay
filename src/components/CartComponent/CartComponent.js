import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import styles from './CartComponent.css';

const CartComponent = () => {
  const { cart } = useContext(DataContext);

  return (
    <div className={styles.cart}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            {item.name}
          </div>
        ))
      )}
    </div>
  );
};

export default CartComponent;
