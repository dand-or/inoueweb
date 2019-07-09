import React from 'react';
import HeaderWithBanner from '../organisms/HeaderWithBanner';
import TopNews from '../organisms/TopNews';
import About from '../organisms/About';
import Footer from '../organisms/Footer';

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
