import React from 'react';

function Loader() {
  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          <span>E</span>
          <span>X</span>
          <span>T</span>
          <span>R</span>
          <span>A</span>
          <span>&nbsp;</span>
          <span>O</span>
          <span>R</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>A</span>
          <span>R</span>
          <span>Y</span>
          <span>&nbsp;</span>
          <span>B</span>
          <span>E</span>
          <span>G</span>
          <span>I</span>
          <span>N</span>
          <span>S</span>
          <span>&nbsp;</span>
          <span>H</span>
          <span>E</span>
          <span>R</span>
          <span>E</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
