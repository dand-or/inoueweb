import React from "react";
import HeaderWithoutBanner from "../../organisms/HeaderWithoutBanner";
import ProductsMain from "../../organisms/ProductsMain";
import MediaQuery from "react-responsive";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Spring, config } from "react-spring/renderprops";
import { TwitterShareButton,TwitterIcon,FacebookShareButton,FacebookIcon} from 'react-share';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ZakuToNaisho: React.FC = () => {
  const articleUrl = "https://inoue-mokei.com/products/zakutonaisho";
  const productImage = () => {
    return (
      <div className="product-img">
        <p>
          <img src="/img/products/zakutonaisho_001.png" alt="ザクとないしょ表紙" />
        </p>
      </div>
    )};

  const productText = () =>{
    return(
      <div className="product-txt-container">
        <div className="product-txt-container-header">
          <span className="products-tag">C96@土曜 西 ぬ02-a</span>
          <span className="products-genre">絵本</span>
          <span className="products-item-title">ザクとないしょ</span>
        </div>
        <div className="content">
          <MediaQuery minDeviceWidth={481}>
            <p className="catchcopy">ジオンの おとこは くちが かたいぜ！</p>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={480}>
            <p className="catchcopy">ジオンの おとこは<br/>くちが かたいぜ！</p>
          </MediaQuery>
          <p className="summary">イノウエ模型が贈る記念すべき最初の作品は大人と子どもが一緒に楽しめるガンダム絵本！<br />
            合計20頁に渡る、ちょっとヘンテコで心温まる物語で親子の絆を深めませんか？
          </p>
          <p className="price">頒布価格: ¥500- </p>
          <p className="up-date">発表日: 2019.08.10 </p>
          <div className="share">
            <TwitterShareButton title="ザクとないしょ | イノウエ模型" via="inoue_mokei" url={articleUrl}>
              <TwitterIcon size={32} round/>
            </TwitterShareButton>
            <FacebookShareButton url={articleUrl}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <ImageGallery items={images} showFullscreenButton={false} autoPlay slideInterval={8000}/>
        </div>
      </div>
    )};

  const images = [
    {
      original: "/img/products/zakutonaisho_001.png",
      thumbnail: '/img/products/zakutonaisho_001_220.png',
      description: "sample", 
    },
    {
      original: "/img/products/zakutonaisho_004.png",
      thumbnail: '/img/products/zakutonaisho_004_220.png',
      description: "sample",
    },
    {
      original: "/img/products/zakutonaisho_006.png",
      thumbnail: '/img/products/zakutonaisho_006_220.png',
      description: "sample",
    },
    {
      original: "/img/products/zakutonaisho_013.png",
      thumbnail: '/img/products/zakutonaisho_013_220.png',
      description: "sample",
    }
  ]

  return (
    <div>
      <HeaderWithoutBanner />
      <div id="main">
        <div className="container">
          <section>
            <header className="news-head">
              <span className="icon-HP-">
                <span className="path3" />
              </span>
              <span>Products</span>
            </header>
          </section>

          <MediaQuery minDeviceWidth={481}>
            <ProductsMain isFlex={true}>
              {productImage()}
              {productText()}
            </ProductsMain>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={480}>
            <ProductsMain isFlex={false}>
              {productImage()}
              {productText()}
            </ProductsMain>
          </MediaQuery>
        </div>
      </div>
    </div>
  );
};

export default ZakuToNaisho;
