import React from 'react';
import AnchorLink from '../../presentational/atoms/AnchorLink';
import {Spring,config} from 'react-spring/renderprops'

const Banner: React.FC = () => {
  return (
		<div id="banner">
			<div className="container">
				<section>
					<Spring config={{tension:500,friction:100, delay:500}}
						from={{color:"transparent",opacity:0}}
						to={{color:"#fff",opacity:1}}>
						{props => 
						<header style={props}>
							<h2>This is INOUE MOKEI.</h2>
							<span className="byline">Inoue Mokei is a coterie circle that delivers just ideas, excitement and eccentricity by "Koyu Tobari" and "Shinchaya Omaru" who love Gundam.</span>
						</header>}
					</Spring>
					<Spring config={{tension:500,friction:100, delay:1000}}
						from={{opacity:0,transform:"translate3d(0,20px,0)"}}
						to={{opacity:1,transform:"translate3d(0,0,0)"}}>
					{props => <div style={props}><AnchorLink href="#about" className="button medium">ABOUT US</AnchorLink></div>}
					</Spring>
				</section>	
			</div>
		</div>
	);
}

export default Banner;
