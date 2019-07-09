import React from 'react';

const Footer: React.FC = () => {
  return (
		<footer id="footer">
			<div className="container">
				<div className="row">
					<section className="6u">
						<div className="footer-item-head">
							<h2>Links</h2>
						</div>
						<ul className="default">
							<li><a href="https://www.pixiv.net/member.php?id=23970140" target="_blank">児湯とばり pixiv</a></li>
							<li><a href="https://koyu-tobari.tumblr.com/" target="_blank">児湯とばり tumbler</a></li>
							<li><a href="https://webcatalog.circle.ms/Perma/Circle/10413747/" target="_blank">コミケWEBカタログ</a></li>
						</ul>
					</section>
					<section className="6u">
						<div className="footer-item-head">
							<h2>Social Media</h2>
						</div>
						<ul className="default">
							<li><a href="https://twitter.com/inoue_mokei" target="_blank">twitter@inoue_mokei</a></li>
							<li><a href="https://twitter.com/koyu_tobari" target="_blank">twitter@koyu_tobari</a></li>
							<li><a href="https://twitter.com/shinchaya_omaru" target="_blank">twitter@shinchaya_omaru</a></li>
						</ul>
					</section>
				</div>
			</div>
		</footer>
  );
}

export default Footer;
