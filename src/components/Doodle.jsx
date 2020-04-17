import React from 'react';
import './Doodle.css';

export default ({ image1, image2, image3 }) => {
  return (
    <div className="images">
      <img src={image1} className="first" />
      <img src={image2} className="second" />
      <img src={image3} className="third" />
    </div>
  );
};
