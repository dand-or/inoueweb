

import React from 'react';
import {useSpring, animated} from 'react-spring';
import {HashLink as Link} from 'react-router-hash-link';

interface IProductsItemProps{
    href: string,
    thumb: string,
    isCommingSoon: boolean,
    tag:string,
    genre:string,
    title:string
}

const ProductsItem = (p:IProductsItemProps) => {
  const fadeIn = useSpring({to:{opacity:1},from:{opacity:0},config: { mass: 5, tension: 500, friction: 80 }});
  return (
    <animated.div style={fadeIn}>
        <div className="products-item">
            <Link to={p.href}>
            <span className="products-item-thumb">
                <img className={p.isCommingSoon ? "grayfileter" : ""} src={p.thumb} />
                {p.isCommingSoon ? <span className="products-commingsoon">Comming soon</span> : null}
            </span>
            <div className="products-item-txt">
                <span className="products-tag">{p.tag}</span>
                <span className="products-genre">{p.genre}</span>
                <span className="products-item-title">{p.title}</span>
            </div>
            </Link>
        </div>
    </animated.div>  
  );
}

export default ProductsItem;
