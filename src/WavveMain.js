import React, {useState, useRef} from 'react';
import Wrapper from './components/Wrapper';
import MainContents from './components/MainContents';
import MainNav from './components/MainNav';
import Footer from './components/Footer';
import './asset/common.css';
import './asset/WavveMain.scss';


const WavveMain = () => {

    const [page, setPage] = useState('01');
 
    const mainEl = useRef(null);
    const topBtn = useRef(null);
 
    const onclick = e => {
       setPage(e.target.dataset.num);
       var num = e.target.dataset.num.slice(-1)-1;
       for(var i =0; i<mainEl.current.children.length; i++){
          mainEl.current.children[i].classList.remove("clicked")
          if(i===num){
             mainEl.current.children[i].classList.add("clicked")
          }
       }
    }

   window.addEventListener('scroll', function(){
      if(window.scrollY>=200){
         topBtn.current.style.display="block"
      }
      else{
         topBtn.current.style.display="none"
      }
   })

    return (
      <Wrapper>
         <MainNav mainEl={mainEl} onClick={onclick}/>
         <MainContents page={page}/>
         <Footer></Footer>
         <a href="#top" className="top" ref={topBtn}><img src={require("./asset/icon/topBtn.png")} alt="top button"></img></a>
      </Wrapper>
    );
};

export default WavveMain;