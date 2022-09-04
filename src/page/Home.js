import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import * as ROUTE from "../constants/routes";
import { Link } from "react-router-dom";
import featuredData from "../components/data/featuredData";
import ProductCard from "../components/Product/ProductCard";
const Home = () => {
  return (
    <>
      <Header />
      <div className="basket items-center justify-center m-auto pt-12">
        <Banner />
        <div className="mx-20 mt-40">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold">Featured Products</h1>
            <Link
              to={ROUTE.FEATURED_PRODUCTS}
              className="underline text-3xl font-medium"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-8 w-full h-auto">
            {featuredData.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className="mx-20 mt-40 ">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold">Recommended Products</h1>
            <Link
              to={ROUTE.RECOMMENDED_PRODUCTS}
              className="underline text-3xl font-medium"
            >
              See All
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8 mb-8 w-full h-auto">
            {featuredData.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
