import React from 'react';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import './LayoutComponent.css';

const LayoutComponent = ({ children }) => {
  return (
    <div className="layout">
      <HeaderComponent />
      <main>{children}</main>
    </div>
  );
};

export default LayoutComponent;
