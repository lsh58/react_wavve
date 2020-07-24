import React, {useState, useRef} from 'react';
import logo from '.././logo.png';
import searchImg from '../asset/icon/searchBtn.png';
import catImg from '../asset/icon/catBtn.png';
import MainNavCat from './MainNavCat';

const MainNav = ({ mainEl, onClick}) => {
  
    const [catIndex, setCatIndex] = useState('VOD');

    const category = useRef(null);
    const catTitle = useRef(null);

    const onmouseenter = () =>{
      category.current.style.top="100%"
      category.current.style.visibility="visible"
      category.current.style.opacity="1"
    }
    const onmouseleave = () =>{
      category.current.style.top="90%"
      category.current.style.visibility="hidden"
      category.current.style.opacity="0"
    }

    const onclick = e => {
      e.preventDefault();
      setCatIndex(e.target.innerHTML);
      for(var i=0; i<catTitle.current.children.length; i++){
        catTitle.current.children[i].children[0].classList.remove('selected');
      }
      e.target.classList.add('selected')
    }

    return (
      <header>
        <div className="headBar">
          <div className="headBar__wrapper">
            <ul>
              <li>로그인</li>
              <li>이용권</li>
              <li>편성표</li>
              <li>이벤트</li>
            </ul>
          </div>
        </div>
        <div className="mainNav">
          <div className="mainNav__wrapper">
            <h1><img src={logo} alt="logo" onClick={onClick} data-num="01"></img></h1>
            <ul className="mainNav__category" ref={mainEl}>
              <li className="clicked" onClick={onClick} data-num="01">홈</li>
              <li onClick={onClick} data-num="02">방송</li>
              <li onClick={onClick} data-num="03">LIVE</li>
              <li onClick={onClick} data-num="04">영화</li>
              <li onClick={onClick} data-num="05">해외시리즈</li>
            </ul>
            <button className="mainNav__searchBtn">
            <img src={searchImg} alt="search"></img>
            <span>검색하기</span>
            </button>
            <button className="mainNav__catBtn"
            onMouseEnter={onmouseenter}
            onMouseLeave={onmouseleave}> 
            <img src={catImg} alt="search"></img>
            <span>카테고리 검색</span>
            </button>
            <div className="mainNav__categoryBox"
            ref={category}
            onMouseEnter={onmouseenter}
            onMouseLeave={onmouseleave}>
              <ul className="mainNav__categoryBox__title" onClick={onclick} ref={catTitle}>
                <li><a href="/" className="selected">VOD</a></li>
                <li><a href="/">영화</a></li>
                <li><a href="/">영화 플러스</a></li>
              </ul>
              <ul className="mainNav__categoryBox__contents">
                <MainNavCat catIndex={catIndex}></MainNavCat>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
};


export default MainNav;
