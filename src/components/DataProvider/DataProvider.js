import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  products: [],
  cart: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get('https://fakestoreapi.com/products');
      dispatch({ type: 'SET_PRODUCTS', payload: result.data });
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  return (
    <DataContext.Provider value={{ ...state, addToCart, removeFromCart }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
