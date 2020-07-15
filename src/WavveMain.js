import React, {useState, useRef} from 'react';
import Wrapper from './components/Wrapper';
import HeadBar from './components/HeadBar';
import NavWrapper from './components/NavWrapper';
import MainContents from './components/MainContents';
import MainNav from './components/MainNav';
import logo from './logo.png';
import './WavveMain.css';

const WavveMain = () => {

    const [page, setPage] = useState('main');
 
    const mainEl = useRef(null);
 
    const onenter = e => {
       var num = e.target.id.slice(-1)-1;
       for(var i =0; i<mainEl.current.children.length; i++){
          mainEl.current.children[i].classList.remove("clicked")
          if(i===num){
             mainEl.current.children[i].classList.add("clicked")
          }
       }
    }
 
    const onclick = e => {
       setPage(e.target.innerText);
    }
    
    const toMain = () => {
       setPage('main');
       for(var i =0; i<mainEl.current.children.length; i++){
          mainEl.current.children[i].classList.remove("clicked");
       }
    }
 
    return (
        <Wrapper>
         <HeadBar></HeadBar>
         <NavWrapper>
            <h1><img src={logo} alt="logo" onClick={toMain}></img></h1>
            <MainNav mainEl={mainEl} onMouseEnter={onenter} onClick={onclick}/>
            <button className="search"></button>
            <button className="category"></button>
         </NavWrapper>
         <MainContents page={page}/>
        </Wrapper>
    );
};

export default WavveMain;