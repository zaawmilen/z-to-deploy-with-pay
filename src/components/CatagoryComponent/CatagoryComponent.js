import React from 'react';
import './CategoryComponent.css';

const CategoryComponent = () => {
  return (
    <div className="categories">
      <div className="category">Electronics</div>
      <div className="category">Books</div>
      <div className="category">Clothing</div>
      <div className="category">Computers</div>
      <div className="category">Smart Home</div>
      <div className="category"> Arts & Crafts</div>
      <div className="category">Baby</div>
      <div className="category">Home and Kitchen</div>
      <div className="category">Industrial and Scientific</div>
      <div className="category">Toys and Games</div>
      {/* Add more categories as needed */}
    </div>
  );
};

export default CategoryComponent;
