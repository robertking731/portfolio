import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react"
const default_width = 45;
function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [imgZoom, setImgZoom] = useState(default_width);

  // const handleScroll = (e) => {
  //   const { scrollTop, scrollHeight, clientHeight } = e.target;
  //   const position = Math.ceil(
  //     (scrollTop / (scrollHeight - clientHeight)) * 100
  //   );
  //   setScrollPosition(position);
  //   setImgZoom(img=>img+1);
  // };
  useEffect(() => {
    window.onwheel = (e) => {
      setImgZoom(width => {
        // console.log(width);
        // if (width > 100 || imgZoom < 0) {
        //   return width;
        // } else {
        //   }
        document.body.style.overflow = "hidden";
        if (e.deltaY > 0) {
          if (width > 100) {
            document.body.style.overflow = "visible";
            return width
          } else return width + 6
        } else {
          if (width < default_width + 6) {
            return width
          } else return width - 6
        }

      })

    }
  }, []);

  return (
    <header>
      <div className="navbar">
        <div className="navbar_container">
          <div className="navbar_logo-wrapper is-mobile w-inline-block">
            <div className="navbar_logo-word-wrapper is-1">
              <img src="/images/logo-title1.svg" loading="lazy" alt="" className="navbar_logo-word-image is-1"/>
            </div>
            <div className="navbar_logo-line"></div>
            <div className="navbar_logo-word-wrapper is-2">
              <img src="/images/logo-title2.svg.svg" alt="" className="navbar_logo-word-image is-2" />
            </div>
          </div>
          <p className="button-text text-color-white">CONTACT</p>
          </div>
        </div>
      <div className='intro-part'>
        <h1>
          Webflow Designer
          <br />
          & Developer
          <br />
          crafting custom
          <br />
          experiences
        </h1>
        <div className='button-group'>
          <button className='button w-inline-block'>GO TO MY NEW WEBSITE</button>
          <button className='button is-secondary w-inline-block'>BOOK A FREE CONSULTATION CALL</button>
        </div>
      </div>
      <img src='/images/man.webp' className='intro-photo' style={{ width: `${imgZoom}%` }} />
    </header>
  );
}

export default App;
