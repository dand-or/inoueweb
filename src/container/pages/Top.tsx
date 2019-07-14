import React from 'react';
import HeaderWithBanner from '../organisms/HeaderWithBanner';
import TopNews from '../organisms/TopNews';
import About from '../organisms/About';

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {Spring,config} from 'react-spring/renderprops'

const Top: React.FC = () => {
  return (
    <div>
      <HeaderWithBanner />
      <TopNews />
      <About />
    </div>
  );
}

export default Top;
