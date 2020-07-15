import React from 'react';

const MainNav = ({ mainEl, onMouseEnter, onClick}) => {
  
    return (
      <>
      <ul className="mainNav" ref={mainEl}>
        <li id="mainNav01" 
        onMouseEnter={onMouseEnter} 
        onClick={onClick}>홈</li>
        <li id="mainNav02" 
        onMouseEnter={onMouseEnter} 
        onClick={onClick}>방송</li>
        <li id="mainNav03" 
        onMouseEnter={onMouseEnter} 
        onClick={onClick}>LIVE</li>
        <li id="mainNav04" 
        onMouseEnter={onMouseEnter} 
        onClick={onClick}>영화</li>
        <li id="mainNav05" 
        onMouseEnter={onMouseEnter} 
        onClick={onClick}>해외시리즈</li>
      </ul>
      </>
    );
};


export default MainNav;
