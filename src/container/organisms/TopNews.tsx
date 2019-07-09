import React from 'react';

const TopNews: React.FC = () => {
  return (
	<div id="main">
	
		<div className="container">

			<section>
				<header className="news-head">
					<span className="icon-HP-">
						<span className="path3"></span>
					</span>
					<span>News</span>
				</header>
			</section>

			<div className="row">
				<section className="2u">
					<p>2019/06/17</p>
				</section>
				<section className="10u left">
					<p>2019年8月10日(土) コミックマーケット96にサークル参加します。西ぬ02aにて「ガンダムの絵本(タイトル未定)」を頒布！</p>
				</section>
			</div>
		</div>
	</div>
  );
}

export default TopNews;
