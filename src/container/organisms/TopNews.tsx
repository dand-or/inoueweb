import React from 'react';
import {HashLink as Link} from 'react-router-hash-link';

const TopNews : React.FC = () => {
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
			<TopNewsLine linkType={2} date="2019/07/15" summary="C96で頒布する絵本のタイトルが『ザクとないしょ』に決定！詳細を待て！" href="/products#root"/>
			<TopNewsLine linkType={0} date="2019/06/17" summary="2019年8月10日(土) コミックマーケット96にサークル参加します。西ぬ02aにて「ガンダムの絵本(タイトル未定)」を頒布！" />
		</div>
	</div>
  );
}

interface ITopNewsLine{
	date: string,
	summary: string,
	linkType: number,
	href?:string,
	isTargetBlank?: boolean
}
const TopNewsLine = (props:ITopNewsLine) => {
	const renderLine = (t:number) =>{
		switch (t){
			case 1:
				return(
				<a href={props.href} target={props.isTargetBlank ? "_blank" : "_self"}>
					<p>{props.summary}}</p>
				</a>
				)
			case 2:
				let to = typeof(props.href) == 'undefined' ? '' : props.href;
				return(
				<Link smooth to={to}>
					<p>{props.summary}</p>
				</Link>
				)
			default:
				return(<p>{props.summary}</p>)
		}
	}
	return(
		<div className="row">
			<section className="2u">
				<p>{props.date}</p>
			</section>
			<section className="10u left">
				{renderLine(props.linkType)}
			</section>
		</div>
	);
}

export default TopNews;
