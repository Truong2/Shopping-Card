import React, { useEffect, useState, useRef } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";
import * as ROUTE from "../../constants/routes";
import Select from "react-select";
import ColorChooser from "../ColorChooser/ColorChooser";
import featuredData from "../data/featuredData";
import ProductCard from "./ProductCard";
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../Redux/productSlice";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { t } = useTranslation();
  const data = useSelector((state) => state.products);
  const length = data.length;
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  //API
  const { id } = useParams();
  useEffect(() => {
    // call api with id
  }, []);

  //fake data
  const products = [
    {
      id: uuidv4(),
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FALz5M4DI7MF7CdZrq3gS?alt=media&token=8d33ea34-2de3-466b-9b3d-27015e9cd540",
    },
    {
      id: uuidv4(),
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYZ7LM3vZjWbIIJH2tgEb?alt=media&token=5e722063-a792-4502-9f6e-c3df1581aa9c",
    },
  ];
  const sizes = [32, 28, 36];
  const colors = [
    "#000000",
    "#FF0000",
    "#0000FF",
    "#FF00FF",
    "#FF6600",
    "#660000",
    "#FFFF00",
  ];
  const [selectedImage, setSelectedImage] = useState(products[0].imageSrc);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("#000000");
  const colorOverlay = useRef(null);

  const product = {
    id: uuidv4(),
    name: "Burnikk",
    link: selectedImage,
    quantity: 1,
    size: selectedSize ? selectedSize : 28,
    color: selectedColor,
    total: "674.00",
  };
  const onColorChange = (color) => {
    setSelectedColor(color);
    if (colorOverlay.current) {
      colorOverlay.current.value = color;
    }
  };
  const handleAddProduct = () => {
    const action = addProduct(product);
    dispatch(action);
    setToggle(false);
  };
  const handleRemoveProduct = () => {
    const action = removeProduct(product.name);
    dispatch(action);
    setToggle(true);
  };
  return (
    <>
      <Header />
      <div className="basket items-center justify-center pt-12 pl-40 mb-40">
        <div className="mx-20">
          <Link to={ROUTE.SHOP}>
            <h3 className="bg-none outline-none inline-flex items-center font-semibold mb-6 p-6">
              <ArrowLeftOutlined className="flex items-center justify-center" />
              &nbsp; Back to shop
            </h3>
          </Link>
          <div className="w-full flex bg-[#fff] border border-solid border-[#e1e1e1]">
            <div className="w-[150px] h-full bg-[#fff] flex flex-col p-[10px] relative overflow-y-scroll scrollbar scrollbar-medium scrollbar-thumb scrollbar-track">
              {products.map((product) => (
                <div
                  className="w-full h-[100px]  border border-solid border-[#e1e1e1] mb-2 relative"
                  key={product.id}
                  onClick={() => setSelectedImage(product.imageSrc)}
                >
                  <img
                    className="w-full h-full object-contain"
                    src={product.imageSrc}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="w-[40rem] h-[50rem] flex flex-grow relative bg-[#f8f8f8]">
              {selectedColor && (
                <input
                  type="color"
                  // value="#ffffff"
                  disabled
                  ref={colorOverlay}
                  id="color-overlay"
                  name="color-overlay"
                  className="absolute top-0 left-0 w-full h-full mix-blend-hue"
                />
              )}
              <img
                alt=""
                className="w-full h-full object-contain"
                src={selectedImage}
              />
            </div>
            <div className="w-[500px] p-12 ">
              <span className="text-[#818181] text-2xl">Sexbomb</span>
              <h1 className="margin-top-0 text-5xl font-bold">Burnikk</h1>
              <span className="text-[#4a4a4a] text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                placeat similique dicta nulla praesentium deserunt. Corporis
                repellendus deleniti dolores eligendi.
              </span>
              <div className="mt-10">
                <span className="text-2xl text-[#818181]">
                  Lens Width and Frame Size
                </span>
                <br />
                <br />
                <Select
                  placeholder="--Select Size--"
                  onChange={(e) => setSelectedSize(e.value)}
                  role="presentation"
                  options={sizes
                    .sort((a, b) => (a < b ? -1 : 1))
                    .map((size) => ({
                      label: `${size} mm`,
                      value: size,
                    }))}
                  className="text-2xl font-medium border-none outline-none"
                />
              </div>
              {colors.length >= 1 && (
                <div className="mt-5">
                  <span className="text-2xl text-[#818181] ">Choose Color</span>
                  <br />
                  <br />
                  <ColorChooser
                    colors={colors}
                    onColorChange={onColorChange}
                    selectedColor={selectedColor}
                  />
                </div>
              )}
              <h1 className="font-medium mt-6 text-5xl">$674.00</h1>
              {toggle || length === 0 ? (
                <button
                  className="border border-solid border-[#2a2a2a] button-small text-white bg-black mt-5"
                  onClick={handleAddProduct}
                >
                  {t("others.addToBasket")}
                </button>
              ) : (
                <button
                  className="border border-solid border-[#e1e1e1] button-small text-black  mt-5 bg-white"
                  onClick={() => handleRemoveProduct()}
                >
                  {t("others.removeFromBasket")}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="basket items-center justify-center m-auto">
        <div className="mx-20 mt-40">
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

export default ProductDetail;
