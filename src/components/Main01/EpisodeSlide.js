import React, { useRef } from 'react';
import EpisodeSlideList from './EpisodeSlideList';
import { MdKeyboardArrowRight } from 'react-icons/md';

const EpisodeSlide = () => {
  const episodeList = [
    {
      id: 1,
      src: require('../../asset/episode/epi001.jpg'),
      alt: 'epi001',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 2,
      src: require('../../asset/episode/epi002.jpg'),
      alt: 'epi002',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 3,
      src: require('../../asset/episode/epi003.jpg'),
      alt: 'epi003',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 4,
      src: require('../../asset/episode/epi004.jpg'),
      alt: 'epi004',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 5,
      src: require('../../asset/episode/epi005.jpg'),
      alt: 'epi005',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 6,
      src: require('../../asset/episode/epi006.jpg'),
      alt: 'epi006',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 7,
      src: require('../../asset/episode/epi007.jpg'),
      alt: 'epi007',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 8,
      src: require('../../asset/episode/epi008.jpg'),
      alt: 'epi008',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 9,
      src: require('../../asset/episode/epi009.jpg'),
      alt: 'epi009',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 10,
      src: require('../../asset/episode/epi010.jpg'),
      alt: 'epi010',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 11,
      src: require('../../asset/episode/epi011.jpg'),
      alt: 'epi011',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 12,
      src: require('../../asset/episode/epi012.jpg'),
      alt: 'epi012',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 13,
      src: require('../../asset/episode/epi013.jpg'),
      alt: 'epi013',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 14,
      src: require('../../asset/episode/epi014.jpg'),
      alt: 'epi014',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 15,
      src: require('../../asset/episode/epi015.jpg'),
      alt: 'epi015',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 16,
      src: require('../../asset/episode/epi016.jpg'),
      alt: 'epi016',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 17,
      src: require('../../asset/episode/epi017.jpg'),
      alt: 'epi017',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 18,
      src: require('../../asset/episode/epi018.jpg'),
      alt: 'epi018',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 19,
      src: require('../../asset/episode/epi019.jpg'),
      alt: 'epi019',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
    {
      id: 20,
      src: require('../../asset/episode/epi020.jpg'),
      alt: 'epi020',
      title: '미운 우리 새끼',
      date: '199회 2020-07-19(일)',
    },
  ];

  var originLeft = 0;
  var bln = true;
  var indicatorNum = 1;

  const prevBtn = useRef(null);
  const nextBtn = useRef(null);
  const epiSlide = useRef(null);
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
      epiSlide.current.style.left = originLeft + 1250 + 'px';
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
      epiSlide.current.style.left = originLeft - 1250 + 'px';
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
      epiSlide.current.style.left = originLeft + 1250 * Math.abs(move) + 'px';
      originLeft += 1250 * Math.abs(move);
    } else {
      epiSlide.current.style.left = originLeft - 1250 * Math.abs(move) + 'px';
      originLeft -= 1250 * Math.abs(move);
    }
  };

  return (
    <div className="HomeMain__episode">
      <div className="HomeMain__episode__wrapper">
        <div className="HomeMain__episode__top">
          <div className="HomeMain__episode__title">
            <h2>인기 에피소드</h2>
            <a href="/">
              <span>더보기</span>
              <MdKeyboardArrowRight></MdKeyboardArrowRight>
            </a>
          </div>
          <div className="HomeMain__episode__indicator" ref={indicator}>
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
          className="HomeMain__episode__slidewrapper"
          ref={epiSlide}
          onMouseEnter={onmouseenter}
          onMouseLeave={onmouseleave}
        >
          {episodeList.map((v) => {
            return (
              <EpisodeSlideList
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
          className="HomeMain__episode__prevBtn"
          ref={prevBtn}
          onMouseEnter={onmouseenter}
          onMouseLeave={onmouseleave}
          onClick={onleftclick}
        ></button>
        <button
          className="HomeMain__episode__nextBtn"
          ref={nextBtn}
          onMouseEnter={onmouseenter}
          onMouseLeave={onmouseleave}
          onClick={onrightclick}
        ></button>
      </div>
    </div>
  );
};

export default EpisodeSlide;
