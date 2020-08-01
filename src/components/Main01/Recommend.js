import React from 'react';

const Recommend = () => {
  return (
    <div className="HomeMain__recommend">
      <div className="HomeMain__recommend__wrapper">
        <div className="HomeMain__recommend__title">
          <h2>추천 메뉴</h2>
        </div>
        <div className="HomeMain__episode__contents">
          <button>
            <img
              src={require('../../asset/icon/ic-retro_web.png')}
              alt="classic"
            ></img>
            <span>CLASSIC</span>
          </button>
          <button>
            <img
              src={require('../../asset/icon/ic-baseball_web.png')}
              alt="baseball"
            ></img>
            <span>프로야구</span>
          </button>
          <button>
            <img
              src={require('../../asset/icon/ic-wavve-original_web.png')}
              alt="original"
            ></img>
            <span>오리지널</span>
          </button>
          <button>
            <img
              src={require('../../asset/icon/ic-esports_web.png')}
              alt="esports"
            ></img>
            <span>e스포츠</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
