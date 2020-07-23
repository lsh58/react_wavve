import React from 'react';
import '../../asset/common.css';
import '../../asset/Main01.css';
import MainSlide from './MainSlide';
import EpisodeSlide from './EpisodeSlide';
import Recommend from './Recommend';
import WavvieMovie from './WavvieMovie'

const Main01 = () => {

    return (
      <div className="HomeMain">
        <MainSlide></MainSlide>
        <div className="HomeMain__bannerBar">
          <button></button>
        </div>
        <EpisodeSlide></EpisodeSlide>
        <Recommend></Recommend>
        <WavvieMovie></WavvieMovie>
      </div>
    );
};

export default Main01;