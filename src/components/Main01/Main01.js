import React from 'react';
import '../../asset/common.css';
import '../../asset/Main01.css';
import MainSlide from './MainSlide';
import EpisodeSlide from './EpisodeSlide';

const Main01 = () => {

    return (
      <div className="HomeMain">
        <MainSlide></MainSlide>
        <div className="HomeMain__bannerBar">
          <a href="/"></a>
        </div>
        <EpisodeSlide></EpisodeSlide>
       
      </div>
    );
};

export default Main01;