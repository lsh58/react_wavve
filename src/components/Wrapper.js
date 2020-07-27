import React from 'react';

function Wrapper({children}){
  
    return (
      <div id="top" className="mainWrapper">
        {children}
      </div>
    );
};


export default Wrapper;
