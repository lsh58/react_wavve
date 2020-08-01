import React from 'react';

const WavvieMovieList = ({ src, alt, title, date }) => {
  return (
    <li>
      <a href="/">
        <div className="thumbnail">
          <img src={src} alt={alt}></img>
        </div>
        <div className="title">
          <span>{title}</span>
        </div>
      </a>
    </li>
  );
};

export default WavvieMovieList;
