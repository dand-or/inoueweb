import React,{useState} from 'react';
import MobileMenu from '../pages/MobileMenu';
import AnchorLink from '../../presentational/atoms/AnchorLink';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive'
import {Transition} from 'react-spring/renderprops'

interface IHeaderProps{
	isTop:boolean;
}

const Header = (props:IHeaderProps) => {
	const [isShowMobileMenu, setMobileMenu] = useState(false);
  return (
			<div id="header">
				<div className="container">
						<div id="logo">
              				<a href="/"><img src="/img/logo/logo_plane.png" /></a>
						</div>
						<MediaQuery minDeviceWidth={481} >
							<nav id="nav">
								<ul>
									<li><Link to="/">Top</Link></li>
									<li>{props.isTop ? <AnchorLink href="#main">News</AnchorLink> : <a href="/#main">News</a>}</li>
									<li>{props.isTop ? <AnchorLink href="#about">About</AnchorLink> : <a href="/#about">About</a>}</li>
									<li><Link to="/products">Products</Link></li>
								</ul>
							</nav>
						</MediaQuery>
						<MediaQuery maxDeviceWidth={480}>
							<button className="hamburger" onClick={() => setMobileMenu(!isShowMobileMenu)}>
								<img src="/img/assets/menu.svg" />
							</button>
								{
									isShowMobileMenu ? <MobileMenu isTop={props.isTop} closeAction={setMobileMenu}/> : null
								}
						</MediaQuery>
				</div>
			</div>
  );
}

export default Header;
