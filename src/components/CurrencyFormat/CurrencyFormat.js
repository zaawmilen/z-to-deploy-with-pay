import React from 'react';

const CurrencyFormat = ({ value }) => {
  const formattedValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value);

  return <span>{formattedValue}</span>;
};

export default CurrencyFormat;
