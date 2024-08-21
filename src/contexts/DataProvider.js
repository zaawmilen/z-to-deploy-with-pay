// DataProvider.js
import React, { createContext, useReducer, useEffect, useContext } from 'react';
import axios from 'axios';

// Initial state
const initialState = {
  products: [],
  cart: [],
  order: []
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        )
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
      };
    case 'SET_ORDER':
      return { ...state, order: action.payload };
    case 'SET_CART':
      return { ...state, cart: action.payload };
    default:
      return state;
  }
};

// Create context
export const DataContext = createContext();

// DataProvider component
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchProducts = async () => {
      const result = await axios.get('https://fakestoreapi.com/products');
      dispatch({ type: 'SET_PRODUCTS', payload: result.data });
    };

    fetchProducts();
  }, []);
 // Define the addToCart function
 const addToCart = (product) => {
  console.log('Adding to cart:', product); 
  dispatch({ type: 'ADD_TO_CART', payload: product });
};
  return (
    <DataContext.Provider value={{ state, dispatch, addToCart }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the DataContext
export const useDataContext = () => {
  return useContext(DataContext);
};

export default DataProvider;
