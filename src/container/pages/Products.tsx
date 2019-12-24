import React from 'react';
import HeaderWithoutBanner from '../organisms/HeaderWithoutBanner';
import ProductsItem from '../organisms/ProductsItem';
import {Helmet} from 'react-helmet';

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {Spring,config} from 'react-spring/renderprops'

const Products: React.FC = () => {
  return (
    <div>
      <Helmet 
        title={'Inoue Mokei Official Web | Products'}
        meta={[
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@inoue_mokei' },
          { property: 'og:image', content: 'https://inoue-mokei.com/img/products/c97/worldmsmuserum-thumb.jpg' },
          { property: 'og:title', content: 'Products' },
          { property: 'og:description', content: '同人サークル「イノウエ模型」の作品ページ' },
          { property: 'og:url', content: "https://inoue-mokei.com/products" }
        ]}
      />
      <HeaderWithoutBanner />
      <div id="main">
        <div className="container">
          <section>
            <header className="news-head">
              <span className="icon-HP-">
                <span className="path3"></span>
              </span>
              <span>Products</span>
            </header>
          </section>

          <div id="products-main" className="flex flex-wrap">
            <ProductsItem  href="/products/zakutonaisho" thumb="/img/products/zakutonaisho-thumb.jpg" isCommingSoon={false} tag="C96" genre="絵本" title="ザクとないしょ"/>
            <ProductsItem  href="/products/worldmobilesuitmuseum" thumb="/img/products/c97/worldmsmuserum-thumb.jpg" isCommingSoon={false} tag="C97" genre="図鑑" title="WORLD MOBILE SUIT MUSEUM"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
