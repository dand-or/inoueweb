import React from 'react';
import AnchorLink from '../../presentational/atoms/AnchorLink';

const Banner: React.FC = () => {
  return (
		<div id="banner">
			<div className="container">

				<section>
					<header>
						<h2>This is INOUE MOKEI.</h2>
						<span className="byline">Inoue Mokei is a coterie circle that delivers just ideas, excitement and eccentricity by "Koyu Tobari" and "Shinchaya Omaru" who love Gundam.</span>
					</header>
					<AnchorLink href="#about" className="button medium">ABOUT US</AnchorLink>
				</section>	
			</div>
		</div>
	);
}

export default Banner;
