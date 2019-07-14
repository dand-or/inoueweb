import React from 'react';
import Header from './Header';
import Banner from './Banner';

const HeaderWithoutBanner: React.FC = () => {
  return (
    <header id="header-wrapper" className="no-image">
			<Header isTop={false}/>
	  </header>
  );
}

export default HeaderWithoutBanner;
