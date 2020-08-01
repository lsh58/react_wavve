import React from 'react';

const MainSlideList = ({ src, alt }) => {
  return (
    <li>
      <img src={src} alt={alt}></img>
    </li>
  );
};

export default MainSlideList;
