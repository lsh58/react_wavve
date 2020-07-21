import React from 'react';

const EpisodeSlideList = ({src,alt,title,date}) => {
    return (
        <li>
        <a href="/">
          <div className="thumbnail">
            <img src={src} alt={alt}>
            </img>
          </div>
          <div className="title">
            <span>{title}</span>
            <span>{date}</span>
          </div>
        </a>
      </li>
    );
};

export default EpisodeSlideList;