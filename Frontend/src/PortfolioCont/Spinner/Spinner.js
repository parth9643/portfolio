// Spinner.js

import React from 'react';
import './Spinner.css'; 
import {ColorRing}from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className="spinner">
      {/* Add your spinner content or animation here */}
      <ColorRing
      height="200"
      width="300"
      radius="9"
    ariaLabel="loading"
      wrapperClass
    />
            </div>
  );
};

export default Spinner;
