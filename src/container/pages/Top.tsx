import React from 'react';
import HeaderWithBanner from '../organisms/HeaderWithBanner';
import TopNews from '../organisms/TopNews';
import About from '../organisms/About';
import Footer from '../organisms/Footer';

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {Spring,config} from 'react-spring/renderprops'

const Top: React.FC = () => {
  return (
    <div>
      <HeaderWithBanner />
      <TopNews />
      <About />
      <Footer />
    </div>
  );
}

export default Top;
