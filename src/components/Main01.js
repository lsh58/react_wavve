import React, {useRef} from 'react';
import '../asset/common.css';
import '../asset/Main01.css';

const Main01 = () => {
    
    const slideWrapper = useRef(null);
    
    var originLeft = 0;
    var bln =true;

    const onleftclick = () =>{
        if(bln===true){
            bln=false;
            slideWrapper.current.prepend(slideWrapper.current.lastChild);
            slideWrapper.current.style.transition="all 0s ease 0s";
            slideWrapper.current.style.left=(originLeft-760)+"px";
            originLeft-=760;
            setTimeout(function(){
                slideWrapper.current.style.transition="all 0.35s ease 0s";
                slideWrapper.current.style.left=(originLeft+760)+"px";
                originLeft+=760;
            },10);
            setTimeout(function(){
                bln=true;
            },500);
      }
    }

    const onrightclick = () =>{
        if(bln===true){
            bln=false;
            slideWrapper.current.append(slideWrapper.current.firstChild);
            slideWrapper.current.style.transition="all 0s ease 0s";
            slideWrapper.current.style.left=(originLeft+760)+"px";
            originLeft+=760;
            setTimeout(function(){
                slideWrapper.current.style.transition="all 0.35s ease 0s";
                slideWrapper.current.style.left=(originLeft-760)+"px";
                originLeft-=760;
            },10);
            setTimeout(function(){
                bln=true;
            },500);
      }
    }

    
    const onplaystop = e => {
      if(e.target.className==="controlBtn play"){
        e.target.classList.remove("play");
        e.target.classList.add("stop");
      }
      else{
        e.target.classList.remove("stop");
        e.target.classList.add("play");
      }
    }


    return (
      <div className="HomeMain">
        <div className="HomeMain__mainSlide">
          <ul className="HomeMain__mainSlide__slideWrapper" ref={slideWrapper}>
            <li><img src={require('../asset/banner/001.jpg')} alt="banner001"></img></li>
            <li><img src={require('../asset/banner/002.jpg')} alt="banner002"></img></li>
            <li><img src={require('../asset/banner/003.jpg')} alt="banner003"></img></li>
            <li><img src={require('../asset/banner/004.jpg')} alt="banner004"></img></li>
            <li><img src={require('../asset/banner/005.jpg')} alt="banner005"></img></li>
            <li><img src={require('../asset/banner/006.jpg')} alt="banner006"></img></li>
            <li><img src={require('../asset/banner/007.jpg')} alt="banner007"></img></li>
          </ul>
          <button className="prevBtn" onClick={onleftclick}></button>
          <button className="nextBtn" onClick={onrightclick}></button>
          <div className="HomeMain__mainSlide__indicator">
            <button className="controlBtn play" onClick={onplaystop}></button>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
};

export default Main01;