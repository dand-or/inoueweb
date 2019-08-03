import React from 'react';
import HeaderWithoutBanner from '../organisms/HeaderWithoutBanner';
import ProductsItem from '../organisms/ProductsItem';

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import {Spring,config} from 'react-spring/renderprops'

const Products: React.FC = () => {
  return (
    <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
