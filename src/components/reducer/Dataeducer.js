import React, { createContext, useReducer, useContext } from 'react';

const DataContext = createContext();

const initialState = {
  products: [],
  cart: [],
  order: null,
};

function dataReducer(state, action) {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case 'SET_ORDER':
      return { ...state, order: action.payload };
    default:
      return state;
  }
}

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext);



















// export const initialState = {
//     products: [],
//     cart: [],
//     loading: true,
//   };
  
//   export const dataReducer = (state, action) => {
//     switch (action.type) {
//       case 'SET_PRODUCTS':
//         return { ...state, products: action.payload };
//       case 'ADD_TO_CART':
//         return { ...state, cart: [...state.cart, action.payload] };
//       case 'SET_LOADING':
//         return { ...state, loading: action.payload };
//       default:
//         return state;
//     }
//   };
  