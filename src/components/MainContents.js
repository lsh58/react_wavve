import React from 'react';

function MainContents({page}){
  switch(page)
  {
    case '홈' :
    return (
      <div className="MainContents">
          <h2>HOME</h2>
      </div>
    );
    case '방송':
      return (
        <div className="MainContents">
          <h2>방송</h2>
        </div>
      );
    case 'LIVE':
      return (
        <div className="MainContents">
          <h2>LIVE</h2>
        </div>
      );
    case '영화':
      return (
        <div className="MainContents">
          <h2>영화</h2>
        </div>
      );  
    case '해외시리즈':
      return (
        <div className="MainContents">
          <h2>해외시리즈</h2>
        </div>
      ); 
    default :
      return (
        <div className="MainContents">
            <h2>HOME</h2>
        </div>
      );
  }
};


export default MainContents;
