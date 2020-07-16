import React, {useRef} from 'react';
import '../asset/common.css';
import '../asset/Main01.css';

const Main01 = () => {
    
    const slideWrapper = useRef(null);
    
    var originLeft = -75;
    var bln =true;

    const onleftclick = () =>{
        if(bln===true){
            bln=false;
            slideWrapper.current.prepend(slideWrapper.current.lastChild);
            slideWrapper.current.style.transition="all 0s ease 0s";
            slideWrapper.current.style.left=(originLeft-50)+"%";
            originLeft-=50;
            setTimeout(function(){
                slideWrapper.current.style.transition="all 0.35s ease 0s";
                slideWrapper.current.style.left=(originLeft+50)+"%";
                originLeft+=50;
            },10);
            setTimeout(function(){
                bln=true;
            },200);
        }
    }
    const onrightclick = () =>{
        if(bln===true){
            bln=false;
        slideWrapper.current.append(slideWrapper.current.firstChild);
        slideWrapper.current.style.transition="all 0s ease 0s";
        slideWrapper.current.style.left=(originLeft+50)+"%";
        originLeft+=50;
        setTimeout(function(){
            slideWrapper.current.style.transition="all 0.35s ease 0s";
            slideWrapper.current.style.left=(originLeft-50)+"%";
            originLeft-=50;
        },10);
        setTimeout(function(){
            bln=true;
        },200);
      }
    }

    return (
      <div className="HomeMain">
        <div className="HomeMain__mainSlide">
          <ul className="slideWrapper" ref={slideWrapper}>
            <li><img src={require('../asset/banner/001.jpg')} alt="banner001"></img></li>
            <li><img src={require('../asset/banner/002.jpg')} alt="banner002"></img></li>
            <li><img src={require('../asset/banner/003.jpg')} alt="banner003"></img></li>
            <li><img src={require('../asset/banner/004.jpg')} alt="banner004"></img></li>
            <li><img src={require('../asset/banner/005.jpg')} alt="banner005"></img></li>
          </ul>
          <button className="prevBtn" onClick={onleftclick}></button>
          <button className="nextBtn" onClick={onrightclick}></button>
        </div>
      </div>
    );
};

export default Main01;