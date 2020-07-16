import React from 'react';
import Main01 from './Main01';

function MainContents({page}){
  
  switch(page)
  {
    case '01' :
    return (
      <Main01>
      </Main01>
    );
    case '02':
      return (
        <div className="MainContents">
          <h2>방송</h2>
        </div>
      );
    case '03':
      return (
        <div className="MainContents">
          <h2>LIVE</h2>
        </div>
      );
    case '04':
      return (
        <div className="MainContents">
          <h2>영화</h2>
        </div>
      );  
    case '05':
      return (
        <div className="MainContents">
          <h2>해외시리즈</h2>
        </div>
      ); 
    default :
      return (
        <div className="HomeMain">

        </div>
      );
  }
};


export default MainContents;
