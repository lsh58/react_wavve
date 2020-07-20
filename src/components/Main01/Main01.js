import React, {useRef} from 'react';
import '../../asset/common.css';
import '../../asset/Main01.css';
import MainSlide from './MainSlide';

const Main01 = () => {
  
  const episodeSlideWrapper = useRef(null);

    return (
      <div className="HomeMain">
        <MainSlide></MainSlide>
        <div className="HomeMain__bannerBar">
          <a href="/"></a>
        </div>
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
            <ul className="HomeMain__episode__slidewrapper" ref={episodeSlideWrapper}>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi001.jpg')} alt="epi001">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi002.jpg')} alt="epi002">
                    </img>
                  </div>
                  <div className="title">
                    <span>런닝맨</span>
                    <span>512회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi003.jpg')} alt="epi003">
                    </img>
                  </div>
                  <div className="title">
                    <span>놀면 뭐하니?</span>
                    <span>51회 2020-07-18(토)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi004.jpg')} alt="epi004">
                    </img>
                  </div>
                  <div className="title">
                    <span>슈퍼맨이 돌아왔다</span>
                    <span>339회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi005.jpg')} alt="epi005">
                    </img>
                  </div>
                  <div className="title">
                    <span>나 혼자 산다</span>
                    <span>354회 2020-07-17(금)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi006.jpg')} alt="epi006">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi007.jpg')} alt="epi007">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi008.jpg')} alt="epi008">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi009.jpg')} alt="epi009">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi010.jpg')} alt="epi010">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi011.jpg')} alt="epi011">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi012.jpg')} alt="epi012">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi013.jpg')} alt="epi013">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi014.jpg')} alt="epi014">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi015.jpg')} alt="epi015">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi016.jpg')} alt="epi016">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi017.jpg')} alt="epi017">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi018.jpg')} alt="epi018">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi019.jpg')} alt="epi019">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
              <li>
                <a href="/">
                  <div className="thumbnail">
                    <img src={require('../../asset/episode/epi020.jpg')} alt="epi020">
                    </img>
                  </div>
                  <div className="title">
                    <span>미운 우리 새끼</span>
                    <span>199회 2020-07-19(일)</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Main01;