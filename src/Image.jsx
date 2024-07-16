import React from 'react';

const Image = ({ image }) => {
  return <img src={image} alt="Product" style={{ width: '100%', borderRadius: '8px' }} />;
};

export default Image;
