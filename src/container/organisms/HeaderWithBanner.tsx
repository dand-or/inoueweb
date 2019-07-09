import React from 'react';
import Header from './Header';
import Banner from './Banner';

const HeaderWithBanner: React.FC = () => {
  return (
    <header id="header-wrapper">
			<Header/>
			<Banner/>
	</header>
  );
}

export default HeaderWithBanner;
