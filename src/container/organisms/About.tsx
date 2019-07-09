import React from 'react';

const About: React.FC = () => {
  return (
		<div id="about">
		
		<div className="container">

			<section>
				<header className="news-head">
					<span className="icon-HP-">
						<span className="path3"></span>
					</span>
					<span>About</span>
				</header>
			</section>

			<p><strong>イノウエ模型はガンダムを愛してやまない児湯とばりと新茶屋おまるによる<br />ジャストアイデアにわちゃわちゃとエキセントリックをお届けする同人サークルです。</strong></p>
			<div className="divider"></div>

			<div className="row">
				<section className="6u">
					<a className="image"><img className="round" src="img/koyuthumbnail.jpg" alt=""/></a>
					<h3>児湯とばり</h3>
					<p>漫画やイラストを描いています。<br/>よろしくお願いします！</p>
				</section>
				<section className="6u">
					<a className="image"><img className="round" src="img/omaruthumbnail.jpg" alt=""/></a>
					<h3>新茶屋おまる</h3>
					<p>ただのWeb屋。仕事ください。</p>
				</section>
			</div>
					
		</div>
	</div>
  );
}

export default About;
