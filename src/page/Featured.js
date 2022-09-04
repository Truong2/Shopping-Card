import React from "react";
import Header from "../components/Header/Header";
import bannerImg from "../images/banner-guy.png";
import Product from "../components/Product/product";
import BannerFeature from "../components/Banner/Banner_feature";
import { useTranslation } from "react-i18next";

const Featured = () => {
  const { t } = useTranslation();
  const title = t("menu.featured");
  return (
    <>
      <Header />
      <div className="content px-40 w-[100%] min-h-screen">
        <div className="feature">
          <BannerFeature urlImg={bannerImg} textHeading={title} />
          <Product />
        </div>
      </div>
    </>
  );
};

export default Featured;
