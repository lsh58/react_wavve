import React from 'react';

const MainNavCat = ({catIndex}) => {
     
  switch(catIndex)
  {
    case 'VOD' :
    return (
      <li>
        <ul>
          <li><a href="/">예능</a></li>
          <li><a href="/">드라마</a></li>
          <li><a href="/">시사교양</a></li>
          <li><a href="/">해외시리즈</a></li>
          <li><a href="/">애니메이션</a></li>
          <li><a href="/">키즈</a></li>
          <li><a href="/">스포츠</a></li>
          <li><a href="/">크리에이터</a></li>
        </ul>
      </li>
    );
    case '영화':
      return (
        <li>
          <ul>
            <li><a href="/">드라마</a></li>
            <li><a href="/">가족</a></li>
            <li><a href="/">로맨스</a></li>
            <li><a href="/">코미디</a></li>
            <li><a href="/">액션</a></li>
            <li><a href="/">SF/판타지</a></li>
            <li><a href="/">모험</a></li>
            <li><a href="/">범죄</a></li>
            <li><a href="/">공포/스릴러</a></li>
            <li><a href="/">음악</a></li>
            <li><a href="/">애니메이션</a></li>
            <li><a href="/">다큐멘터리</a></li>
            <li><a href="/">전쟁/재난</a></li>
            <li><a href="/">스포츠</a></li>
            <li><a href="/">기타</a></li>
            <li><a href="/">19</a></li>
            <li><a href="/">19+</a></li>
          </ul>
        </li>
      );
    case '영화 플러스':
      return (
        <li>
          <ul>
            <li><a href="/">드라마</a></li>
            <li><a href="/">가족</a></li>
            <li><a href="/">로맨스</a></li>
            <li><a href="/">코미디</a></li>
            <li><a href="/">액션</a></li>
            <li><a href="/">SF/판타지</a></li>
            <li><a href="/">모험</a></li>
            <li><a href="/">범죄</a></li>
            <li><a href="/">공포/스릴러</a></li>
            <li><a href="/">음악</a></li>
            <li><a href="/">애니메이션</a></li>
            <li><a href="/">다큐멘터리</a></li>
            <li><a href="/">전쟁/재난</a></li>
            <li><a href="/">스포츠</a></li>
            <li><a href="/">기타</a></li>
            <li><a href="/">19</a></li>
            <li><a href="/">19+</a></li>
          </ul>
        </li>
      );
    default :
        return (
        <li>
            <ul>
                <li><a href="/">예능</a></li>
                <li><a href="/">드라마</a></li>
                <li><a href="/">시사교양</a></li>
                <li><a href="/">해외시리즈</a></li>
                <li><a href="/">애니메이션</a></li>
                <li><a href="/">키즈</a></li>
                <li><a href="/">스포츠</a></li>
                <li><a href="/">크리에이터</a></li>
            </ul>
        </li>
    );
  }
};

export default MainNavCat;