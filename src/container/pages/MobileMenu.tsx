import React from 'react';
import HeaderWithoutBanner from '../organisms/HeaderWithoutBanner';
import AnchorLink from '../../presentational/atoms/AnchorLink';
import {Link} from 'react-router-dom';

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {Spring,config} from 'react-spring/renderprops'

interface IMobileMenuProps{
  isTop:boolean,
  closeAction:React.Dispatch<React.SetStateAction<boolean>>
}
const MobileMenu = (props: IMobileMenuProps) => {
  return (
    <div id="mobile-menu">
      <div id="header">
				<div className="container">
						<div id="logo">
              <a href="/"><img src="/img/logo/logo_plane.png" /></a>
						</div>
            <button className="hamburger" onClick={() => props.closeAction(false)}>
              <img src="/img/assets/close.svg" />
            </button>
				</div>
			</div>
      <ul>
        <li>{props.isTop ? <a onClick={() => props.closeAction(false)}>Top</a> : <Link to="/">Top</Link>}</li>
        <li>{props.isTop ? <a href="#main" onClick={() => props.closeAction(false)}>News</a> : <a href="/#main">News</a>}</li>
        <li>{props.isTop ? <a href="#about" onClick={() => props.closeAction(false)}>About</a> : <a href="/#about">About</a>}</li>
        <li>{props.isTop ? <Link to="/products">Products</Link> : <a onClick={() => props.closeAction(false)}>Products</a>}</li>
      </ul>
    </div>
  );
}

export default MobileMenu;
