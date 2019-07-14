import React from 'react';
import Header from './Header';
import Banner from './Banner';
import {Spring,config} from 'react-spring/renderprops'

const HeaderWithBanner: React.FC = () => {
  return (
    <header id="header-wrapper">
      <Spring config={{tension:500,friction:100, delay:500}}
						from={{opacity:0}}
						to={{opacity:1}}>
        {props => 
        <div style={props}>
          <Header isTop={true} />
        </div>}
      </Spring>
      <Spring config={{tension:500,friction:100, delay:300}}
						from={{opacity:0}}
						to={{opacity:1}}>
        {props => 
          <div style={props}>
            <Banner/>
          </div>}
      </Spring>
	  </header>
  );
}

export default HeaderWithBanner;
