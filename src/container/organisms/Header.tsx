import React from 'react';
import AnchorLink from '../../presentational/atoms/AnchorLink';

const Header: React.FC = () => {
  return (
			<div id="header">
				<div className="container">
						<div id="logo">
              				<a href="/"><img src="/img/logo/logo_plane.png" /></a>
						</div>
						<nav id="nav">
							<ul>
								<li><AnchorLink href="#main">News</AnchorLink></li>
								<li><AnchorLink href="#about">About</AnchorLink></li>
							</ul>
						</nav>
	
				</div>
			</div>
  );
}

export default Header;
