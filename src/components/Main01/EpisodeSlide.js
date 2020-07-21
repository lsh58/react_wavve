import React from 'react';
import EpisodeSlideList from './EpisodeSlideList';

const EpisodeSlide = () => {
    
  const episodeList = [
    {id:1, src:require('../../asset/episode/epi001.jpg'), alt:'epi001', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:2, src:require('../../asset/episode/epi002.jpg'), alt:'epi002', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:3, src:require('../../asset/episode/epi003.jpg'), alt:'epi003', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:4, src:require('../../asset/episode/epi004.jpg'), alt:'epi004', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:5, src:require('../../asset/episode/epi005.jpg'), alt:'epi005', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:6, src:require('../../asset/episode/epi006.jpg'), alt:'epi006', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:7, src:require('../../asset/episode/epi007.jpg'), alt:'epi007', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:8, src:require('../../asset/episode/epi008.jpg'), alt:'epi008', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:9, src:require('../../asset/episode/epi009.jpg'), alt:'epi009', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:10, src:require('../../asset/episode/epi010.jpg'), alt:'epi010', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:11, src:require('../../asset/episode/epi011.jpg'), alt:'epi011', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:12, src:require('../../asset/episode/epi012.jpg'), alt:'epi012', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:13, src:require('../../asset/episode/epi013.jpg'), alt:'epi013', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:14, src:require('../../asset/episode/epi014.jpg'), alt:'epi014', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:15, src:require('../../asset/episode/epi015.jpg'), alt:'epi015', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:16, src:require('../../asset/episode/epi016.jpg'), alt:'epi016', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:17, src:require('../../asset/episode/epi017.jpg'), alt:'epi017', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:18, src:require('../../asset/episode/epi018.jpg'), alt:'epi018', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:19, src:require('../../asset/episode/epi019.jpg'), alt:'epi019', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
    {id:20, src:require('../../asset/episode/epi020.jpg'), alt:'epi020', title:'미운 우리 새끼', date:'199회 2020-07-19(일)'},
  ];

    return (
        <div className="HomeMain__episode">
        <div className="HomeMain__episode__wrapper">
          <div className="HomeMain__episode__top">
            <div className="HomeMain__episode__title">
              <h2>인기 에피소드</h2>
              <a href="/">더보기</a>
            </div>
            <div className="HomeMain__episode__indicator">
              <span data-num="1" className="active"></span>
              <span data-num="2"></span>
              <span data-num="3"></span>
              <span data-num="4"></span>
            </div>
          </div>
          <ul className="HomeMain__episode__slidewrapper">
            {episodeList.map( v => {
                return <EpisodeSlideList key={v.id} src={v.src} alt={v.alt} title={v.title} date={v.date}/>;
            })}
          </ul>
        </div>
      </div>
    );
};

export default EpisodeSlide;