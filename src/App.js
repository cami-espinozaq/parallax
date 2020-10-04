import React, { useMemo } from 'react';
import './App.css';
import { throttle } from 'lodash';
import Blocks from './components/Blocks';

function App() {
  let backgroundColors = {
    "pink": "#F06B86",
    "purple": "#A28EBE",
    "green": "#77C29F",
    "yellow": "#F0D577",
    "orange": "#F28061"
  };

  const onScroll =  useMemo(() => {
    const throttled = throttle(e => scrollFn(e), 300);
    return e => {
      e.persist();
      return throttled(e);
    }
  }, []);

  const scrollFn = e => {
    const scroll = e.target.scrollTop + (e.target.offsetHeight / 4);
    const blocks = document.querySelectorAll(".block");

    [...blocks].forEach(b => {
      const color = b.getAttribute('data-key');
      const mainContainer = document.getElementById("main");

      if (b.offsetTop <= scroll && b.offsetTop + b.offsetHeight > scroll) {
        mainContainer.style.backgroundColor = backgroundColors[color];
      }
    });
  }
  
  return (
    <div className="container" id="main" onScroll={onScroll}>
      <Blocks />
    </div>
  );
}

export default App;