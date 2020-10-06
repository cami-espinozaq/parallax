import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import { throttle } from 'lodash';
import Blocks from './components/Blocks';

export const COLORS = {
  "darkBlue": "#004056",
  "turquoise": "#2C858D",
  "green": "#74CEB7",
  "lightGreen": "#C9FFD5",
  "yellow": "#FFFFCB"
};

function App() {

  const onScroll =  useMemo(() => {
    const throttled = throttle(e => scrollFn(e), 350);
    return e => {
      e.persist();
      return throttled(e);
    }
  }, []);

  const [active, setActive] = useState(Object.keys(COLORS)[0]);

  useEffect(() => {
    const mainContainer = document.getElementById("main");
    mainContainer.style.backgroundColor = Object.values(COLORS)[0];
  }, []);
  
  const scrollFn = e => {
    const scroll = e.target.scrollTop + (e.target.offsetHeight / 2.5);
    const blocks = document.querySelectorAll(".block-wrapper");

    [...blocks].forEach(b => {
      const color = b.getAttribute('data-key');
      const mainContainer = document.getElementById("main");

      if (b.offsetTop <= scroll && b.offsetTop + b.offsetHeight > scroll) {
        mainContainer.style.backgroundColor = COLORS[color];
        setActive(color);
      }
    });
  }
  
  return (
    <div className="container" id="main" onScroll={onScroll}>
      <Blocks colors={COLORS} active={active} />
    </div>
  );
}

export default App;



/* export const COLORS = {
  "orange": "#F28061",
  "yellow": "#F0D577",
  "green": "#77C29F",
  "purple": "#A28EBE",
  "pink": "#F06B86"
}; */