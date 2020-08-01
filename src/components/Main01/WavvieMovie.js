import React, { useRef } from 'react';
import WavvieMovieList from './WavvieMovieList';
import { MdKeyboardArrowRight } from 'react-icons/md';

const WavvieMovie = () => {
  const wavvieList = [
    {
      id: 1,
      src: require('../../asset/wavviemovie/wvmv001.jpg'),
      alt: 'wvmv001',
      title: '악마를 보았다',
    },
    {
      id: 2,
      src: require('../../asset/wavviemovie/wvmv002.jpg'),
      alt: 'wvmv002',
      title: '저산 너머',
    },
    {
      id: 3,
      src: require('../../asset/wavviemovie/wvmv003.jpg'),
      alt: 'wvmv003',
      title: '택시2',
    },
    {
      id: 4,
      src: require('../../asset/wavviemovie/wvmv004.jpg'),
      alt: 'wvmv004',
      title: '택시3',
    },
    {
      id: 5,
      src: require('../../asset/wavviemovie/wvmv005.jpg'),
      alt: 'wvmv005',
      title: '택시4',
    },
    {
      id: 6,
      src: require('../../asset/wavviemovie/wvmv006.jpg'),
      alt: 'wvmv006',
      title: '택시4',
    },
    {
      id: 7,
      src: require('../../asset/wavviemovie/wvmv007.jpg'),
      alt: 'wvmv007',
      title: '택시4',
    },
    {
      id: 8,
      src: require('../../asset/wavviemovie/wvmv008.jpg'),
      alt: 'wvmv008',
      title: '택시4',
    },
    {
      id: 9,
      src: require('../../asset/wavviemovie/wvmv009.jpg'),
      alt: 'wvmv009',
      title: '택시4',
    },
    {
      id: 10,
      src: require('../../asset/wavviemovie/wvmv010.jpg'),
      alt: 'wvmv010',
      title: '택시4',
    },
    {
      id: 11,
      src: require('../../asset/wavviemovie/wvmv011.jpg'),
      alt: 'wvmv011',
      title: '택시4',
    },
    {
      id: 12,
      src: require('../../asset/wavviemovie/wvmv012.jpg'),
      alt: 'wvmv012',
      title: '택시4',
    },
    {
      id: 13,
      src: require('../../asset/wavviemovie/wvmv013.jpg'),
      alt: 'wvmv013',
      title: '택시4',
    },
    {
      id: 14,
      src: require('../../asset/wavviemovie/wvmv014.jpg'),
      alt: 'wvmv014',
      title: '택시4',
    },
    {
      id: 15,
      src: require('../../asset/wavviemovie/wvmv015.jpg'),
      alt: 'wvmv015',
      title: '택시4',
    },
    {
      id: 16,
      src: require('../../asset/wavviemovie/wvmv016.jpg'),
      alt: 'wvmv016',
      title: '택시4',
    },
    {
      id: 17,
      src: require('../../asset/wavviemovie/wvmv017.jpg'),
      alt: 'wvmv017',
      title: '택시4',
    },
    {
      id: 18,
      src: require('../../asset/wavviemovie/wvmv018.jpg'),
      alt: 'wvmv018',
      title: '택시4',
    },
    {
      id: 19,
      src: require('../../asset/wavviemovie/wvmv019.jpg'),
      alt: 'wvmv019',
      title: '택시4',
    },
    {
      id: 20,
      src: require('../../asset/wavviemovie/wvmv020.jpg'),
      alt: 'wvmv020',
      title: '택시4',
    },
  ];

  var originLeft = 0;
  var bln = true;
  var indicatorNum = 1;

  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const wavvieSlide = useRef(null);
  const indicator = useRef(null);

  const onmouseenter = () => {
    prevBtn.current.style.left = '1px';
    nextBtn.current.style.right = '1px';
    if (originLeft === 0) {
      prevBtn.current.style.opacity = '0.3';
      prevBtn.current.style.cursor = 'auto';
    } else {
      prevBtn.current.style.opacity = '1';
      prevBtn.current.style.cursor = 'pointer';
    }
    if (originLeft === -3750) {
      nextBtn.current.style.opacity = '0.3';
      nextBtn.current.style.cursor = 'pointer';
    } else {
      nextBtn.current.style.opacity = '1';
      nextBtn.current.style.cursor = 'pointer';
    }
  };

  const onmouseleave = () => {
    prevBtn.current.style.left = '-30px';
    nextBtn.current.style.right = '-30px';
    prevBtn.current.style.opacity = '1';
    nextBtn.current.style.opacity = '1';
  };

  const onleftclick = () => {
    if (bln === true && originLeft !== 0) {
      bln = false;
      wavvieSlide.current.style.left = originLeft + 1250 + 'px';
      originLeft += 1250;
      if (originLeft === 0) {
        prevBtn.current.style.opacity = '0.3';
        prevBtn.current.style.cursor = 'auto';
      } else {
        prevBtn.current.style.opacity = '1';
        prevBtn.current.style.cursor = 'pointer';
      }
      indicator.current.children[indicatorNum - 1].classList.remove('active');
      indicator.current.children[indicatorNum - 2].classList.add('active');
      indicatorNum--;
      setTimeout(function () {
        bln = true;
      }, 500);
    }
  };

  const onrightclick = () => {
    if (bln === true && originLeft !== -3750) {
      bln = false;
      wavvieSlide.current.style.left = originLeft - 1250 + 'px';
      originLeft -= 1250;
      if (originLeft === -3750) {
        nextBtn.current.style.opacity = '0.3';
        nextBtn.current.style.cursor = 'auto';
      } else {
        nextBtn.current.style.opacity = '1';
        nextBtn.current.style.cursor = 'pointer';
      }
      indicator.current.children[indicatorNum - 1].classList.remove('active');
      indicator.current.children[indicatorNum].classList.add('active');
      indicatorNum++;
      setTimeout(function () {
        bln = true;
      }, 500);
    }
  };

  const onindicatorclick = (e) => {
    var move = indicatorNum - parseInt(e.target.dataset.num);
    indicator.current.children[indicatorNum - 1].classList.remove('active');
    indicatorNum -= indicatorNum - parseInt(e.target.dataset.num);
    indicator.current.children[indicatorNum - 1].classList.add('active');
    if (move > 0) {
      wavvieSlide.current.style.left =
        originLeft + 1250 * Math.abs(move) + 'px';
      originLeft += 1250 * Math.abs(move);
    } else {
      wavvieSlide.current.style.left =
        originLeft - 1250 * Math.abs(move) + 'px';
      originLeft -= 1250 * Math.abs(move);
    }
  };

  return (
    <div className="HomeMain__wavvie">
      <div className="HomeMain__wavvie__wrapper">
        <div className="HomeMain__wavvie__top">
          <div className="HomeMain__wavvie__title">
            <h2>Wavvie 영화관_신작</h2>
            <a href="/">
              <span>더보기</span>
              <MdKeyboardArrowRight></MdKeyboardArrowRight>
            </a>
          </div>
          <div className="HomeMain__wavvie__indicator" ref={indicator}>
            <span
              data-num="1"
              className="active"
              onClick={onindicatorclick}
            ></span>
            <span data-num="2" onClick={onindicatorclick}></span>
            <span data-num="3" onClick={onindicatorclick}></span>
            <span data-num="4" onClick={onindicatorclick}></span>
          </div>
        </div>
        <ul
          className="HomeMain__wavvie__slidewrapper"
          ref={wavvieSlide}
          onMouseEnter={onmouseenter}
          onMouseLeave={onmouseleave}
        >
          {wavvieList.map((v) => {
            return (
              <WavvieMovieList
                key={v.id}
                src={v.src}
                alt={v.alt}
                title={v.title}
                date={v.date}
              />
            );
          })}
        </ul>
        <button
          className="HomeMain__wavvie__prevBtn"
          ref={prevBtn}
          onMouseEnter={onmouseenter}
          onMouseLeave={onmouseleave}
          onClick={onleftclick}
        ></button>
        <button
          className="HomeMain__wavvie__nextBtn"
          ref={nextBtn}
          onMouseEnter={onmouseenter}
          onMouseLeave={onmouseleave}
          onClick={onrightclick}
        ></button>
      </div>
    </div>
  );
};

export default WavvieMovie;
