import React from 'react';
import AnchorLink from '../../presentational/atoms/AnchorLink';
import {Link} from 'react-router-dom';

interface IHeaderProps{
	isTop:boolean;
}

const Header = (props:IHeaderProps) => {
  return (
			<div id="header">
				<div className="container">
						<div id="logo">
              				<a href="/"><img src="/img/logo/logo_plane.png" /></a>
						</div>
						<nav id="nav">
							<ul>
								<li><Link to="/">Top</Link></li>
								<li>{props.isTop ? <AnchorLink href="#main">News</AnchorLink> : <a href="/#main">News</a>}</li>
								<li>{props.isTop ? <AnchorLink href="#about">About</AnchorLink> : <a href="/#about">About</a>}</li>
								<li><Link to="/products">Products</Link></li>
							</ul>
						</nav>
	
				</div>
			</div>
  );
}

export default Header;
