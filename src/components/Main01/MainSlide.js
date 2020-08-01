import React, { useRef } from 'react';
import MainSlideList from './MainSlideList';

const MainSlide = () => {
  const mainSlideWrapper = useRef(null);
  const ctrlBtn = useRef(null);
  const indicator = useRef(null);

  var originLeft = 0;
  var bln = true;
  var indicatorNum = 1;

  const onleftclick = () => {
    if (bln === true) {
      bln = false;
      mainSlideWrapper.current.prepend(mainSlideWrapper.current.lastChild);
      mainSlideWrapper.current.style.transition = 'all 0s ease 0s';
      mainSlideWrapper.current.style.left = originLeft - 760 + 'px';
      originLeft -= 760;
      setTimeout(function () {
        mainSlideWrapper.current.style.transition = 'all 0.35s ease 0s';
        mainSlideWrapper.current.style.left = originLeft + 760 + 'px';
        originLeft += 760;
      }, 10);
      setTimeout(function () {
        bln = true;
      }, 500);
      if (indicatorNum > 1) {
        indicator.current.children[indicatorNum].classList.remove('active');
        indicator.current.children[indicatorNum - 1].classList.add('active');
        indicatorNum--;
      } else {
        indicator.current.children[1].classList.remove('active');
        indicator.current.children[7].classList.add('active');
        indicatorNum = 7;
      }
    }
  };

  const onrightclick = () => {
    if (bln === true) {
      bln = false;
      mainSlideWrapper.current.append(mainSlideWrapper.current.firstChild);
      mainSlideWrapper.current.style.transition = 'all 0s ease 0s';
      mainSlideWrapper.current.style.left = originLeft + 760 + 'px';
      originLeft += 760;
      setTimeout(function () {
        mainSlideWrapper.current.style.transition = 'all 0.35s ease 0s';
        mainSlideWrapper.current.style.left = originLeft - 760 + 'px';
        originLeft -= 760;
      }, 10);
      setTimeout(function () {
        bln = true;
      }, 500);
      if (indicatorNum < 7) {
        indicator.current.children[indicatorNum].classList.remove('active');
        indicator.current.children[indicatorNum + 1].classList.add('active');
        indicatorNum++;
      } else {
        indicator.current.children[indicatorNum].classList.remove('active');
        indicator.current.children[1].classList.add('active');
        indicatorNum = 1;
      }
    }
  };

  var slideInterval;
  var slideAni = () => {
    slideInterval = setInterval(function () {
      onrightclick();
    }, 3000);
  };

  slideAni();

  const onplaystop = () => {
    if (ctrlBtn.current.className === 'controlBtn play') {
      ctrlBtn.current.classList.remove('play');
      ctrlBtn.current.classList.add('stop');
      clearInterval(slideInterval);
    } else {
      ctrlBtn.current.classList.remove('stop');
      ctrlBtn.current.classList.add('play');
      slideAni();
    }
  };

  const onindicatorclick = (e) => {
    clearInterval(slideInterval);
    var move = indicatorNum - parseInt(e.target.dataset.num);
    indicator.current.children[indicatorNum].classList.remove('active');
    indicatorNum -= indicatorNum - parseInt(e.target.dataset.num);
    indicator.current.children[indicatorNum].classList.add('active');
    if (move > 0) {
      for (var i = 0; i < Math.abs(move); i++) {
        mainSlideWrapper.current.prepend(mainSlideWrapper.current.lastChild);
      }
      mainSlideWrapper.current.style.transition = 'all 0s ease 0s';
      mainSlideWrapper.current.style.left =
        originLeft - 760 * Math.abs(move) + 'px';
      originLeft -= 760 * Math.abs(move);
      setTimeout(function () {
        mainSlideWrapper.current.style.transition = 'all 0.35s ease 0s';
        mainSlideWrapper.current.style.left =
          originLeft + 760 * Math.abs(move) + 'px';
        originLeft += 760 * Math.abs(move);
        slideAni();
      }, 10);
    } else {
      for (var j = 0; j < Math.abs(move); j++) {
        mainSlideWrapper.current.append(mainSlideWrapper.current.firstChild);
      }
      mainSlideWrapper.current.style.transition = 'all 0s ease 0s';
      mainSlideWrapper.current.style.left =
        originLeft + 760 * Math.abs(move) + 'px';
      originLeft += 760 * Math.abs(move);
      setTimeout(function () {
        mainSlideWrapper.current.style.transition = 'all 0.35s ease 0s';
        mainSlideWrapper.current.style.left =
          originLeft - 760 * Math.abs(move) + 'px';
        originLeft -= 760 * Math.abs(move);
        slideAni();
      }, 10);
    }
  };

  const slideList = [
    { id: 1, src: require('../../asset/banner/001.jpg'), alt: 'banner001' },
    { id: 2, src: require('../../asset/banner/002.jpg'), alt: 'banner002' },
    { id: 3, src: require('../../asset/banner/003.jpg'), alt: 'banner003' },
    { id: 4, src: require('../../asset/banner/004.jpg'), alt: 'banner004' },
    { id: 5, src: require('../../asset/banner/005.jpg'), alt: 'banner005' },
    { id: 6, src: require('../../asset/banner/006.jpg'), alt: 'banner006' },
    { id: 7, src: require('../../asset/banner/007.jpg'), alt: 'banner007' },
  ];

  return (
    <div className="HomeMain__mainSlide">
      <ul className="HomeMain__mainSlide__slideWrapper" ref={mainSlideWrapper}>
        {slideList.map((v) => {
          return <MainSlideList key={v.id} src={v.src} alt={v.alt} />;
        })}
      </ul>
      <button className="prevBtn" onClick={onleftclick}></button>
      <button className="nextBtn" onClick={onrightclick}></button>
      <div className="HomeMain__mainSlide__indicator" ref={indicator}>
        <button
          className="controlBtn play"
          onClick={onplaystop}
          ref={ctrlBtn}
        ></button>
        <span data-num="1" className="active" onClick={onindicatorclick}></span>
        <span data-num="2" onClick={onindicatorclick}></span>
        <span data-num="3" onClick={onindicatorclick}></span>
        <span data-num="4" onClick={onindicatorclick}></span>
        <span data-num="5" onClick={onindicatorclick}></span>
        <span data-num="6" onClick={onindicatorclick}></span>
        <span data-num="7" onClick={onindicatorclick}></span>
      </div>
    </div>
  );
};

export default MainSlide;
