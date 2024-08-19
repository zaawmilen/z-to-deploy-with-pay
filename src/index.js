import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import  DataProvider from './contexts/DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <App />
      </DataProvider>
    </Router>
  </React.StrictMode>
);


// src/index.js
// Warning: ReactDOM.render is no longer supported in React 18.
//  Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: 
// https://reactjs.org/link/switch-to-createroot	

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// // import './styles.css';  // Import the global styles
// import './index.css';
// ReactDOM.render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>,
//   // document.getElementById('root')
// );


















// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';
// // import './styles.css';

// const container = document.getElementById('root');
// const root = createRoot(container);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );







// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// // import './styles.css';  // Import the global styles
// import './index.css'
// import { DataProvider } from './Contexts/DataProvider';
// import {} from 

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render (
//         <React.StrictMode>   

//            <App />
//         </React.StrictMode>,
// );





