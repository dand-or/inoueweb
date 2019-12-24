import React from "react";
import HeaderWithoutBanner from "../../organisms/HeaderWithoutBanner";
import ProductsMain from "../../organisms/ProductsMain";
import MediaQuery from "react-responsive";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Spring, config } from "react-spring/renderprops";
import { TwitterShareButton,TwitterIcon,FacebookShareButton,FacebookIcon} from 'react-share';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const WorldMobileSuitMuseum: React.FC = () => {
  const articleUrl = "https://inoue-mokei.com/products/worldmobilesuitmuseum";
  const productImage = () => {
    return (
      <div className="product-img">
        <p>
          <img src="/img/products/c97/hyousi-top.jpg" alt="ワールドモビルスーツミュージアム表紙" />
        </p>
      </div>
    )};

  const productText = () =>{
    return(
      <div className="product-txt-container">
        <div className="product-txt-container-header">
          <span className="products-tag">C97@土曜 西 や16-b</span>
          <span className="products-genre">図鑑</span>
          <span className="products-item-title">WORLD MOBILE SUIT MUSEUM</span>
        </div>
        <div className="content">
          <MediaQuery minDeviceWidth={481}>
            <p className="catchcopy">こんなのゴッグなんかじゃあありませんよ！</p>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={480}>
            <p className="catchcopy">こんなのゴッグなんかじゃあ<br/>ありませんよ！</p>
          </MediaQuery>
          <p className="summary">イノウエ模型が綴るモビルスーツと兵士たちの妄想ルポ図鑑が誕生！<br />
            作家のモリナガ・ヨウさんのWORLD TANK MUSEUMをリスペクトした構成で愛すべきモビルスーツたちを図鑑にしました。
          </p>
          <p>収録: MS-07B GOUF / MS-09 DOM / MS-14A GELGOOG / MSM-04 ACGUY / MSM-10 ZOCK / MSM-03 GOGG / MSM-03C HY-GOGG / DFA-03 DOPP</p>
          <p>B5フルカラー16頁</p>
          <p className="price">頒布価格: ¥500- </p>
          <p className="up-date">発行日: 2019.12.28 </p>
          <div className="share">
            <TwitterShareButton title="WORLD MOBILE SUIT MUSEUM | イノウエ模型" via="inoue_mokei" url={articleUrl}>
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
      original: "/img/products/c97/hyousi_500.jpg",
      thumbnail: '/img/products/c97/hyousi_150.jpg',
      description: "sample", 
    },
    {
      original: "/img/products/c97/tobira_500.jpg",
      thumbnail: '/img/products/c97/tobira_150.jpg',
      description: "sample",
    },
    {
      original: "/img/products/c97/gouf_500.jpg",
      thumbnail: '/img/products/c97/gouf_150.jpg',
      description: "sample",
    },
    {
      original: "/img/products/c97/zock_500.jpg",
      thumbnail: '/img/products/c97/zock_150.jpg',
      description: "sample",
    },
    {
      original: "/img/products/c97/hygogg_500.jpg",
      thumbnail: '/img/products/c97/hygogg_150.jpg',
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

export default WorldMobileSuitMuseum;
