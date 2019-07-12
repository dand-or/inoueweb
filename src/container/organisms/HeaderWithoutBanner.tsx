import React from 'react';
import Header from './Header';
import Banner from './Banner';

const HeaderWithoutBanner: React.FC = () => {
  return (
    <header id="header-wrapper">
			<Header/>
	  </header>
  );
}

export default HeaderWithoutBanner;
