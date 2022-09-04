import React from "react";
import Header from "../components/Header/Header";
import Product from "../components/Product/product";
import BannerFeature from "../components/Banner/Banner_feature";
import recommendImg from "../images/banner-girl-1.png";
import { useTranslation } from "react-i18next";

const Recommended = () => {
  const { t } = useTranslation();
  const title = t("menu.recommended");
  return (
    <>
      <Header />
      <div className="content px-40 w-[100%] min-h-screen">
        <div className="Recommended">
          <BannerFeature urlImg={recommendImg} textHeading={title} />
          <Product t={t} />
        </div>
      </div>
    </>
  );
};

export default Recommended;
