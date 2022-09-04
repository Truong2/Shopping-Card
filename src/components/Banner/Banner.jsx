import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import * as ROUTE from "../../constants/routes";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="w-full h-[400px] flex items-center justify-center bg-[#f3f3f3]">
            <div className="flex items-start justify-center flex-col p-20 basis-[50%]">
                <h1 className="text-8xl tracking-wide">
                    <strong className="">See</strong>
                    &nbsp;everything with&nbsp;
                    <strong>Clarity</strong>
                </h1>
                <p className="text-[#4a4a4a] leading-10 my-4 text-3xl font-medium pr-4">
                    Buying eyewear should leave you happy and good-looking, with
                    money in your pocket. Glasses, sunglasses, and
                    contacts—we’ve got your eyes covered.
                </p>
                <br />
                <Link
                    to={ROUTE.SHOP}
                    className="button button-large text-white bg-black"
                >
                    Shop Now &nbsp;
                    <ArrowRightOutlined className="leading-none text-2xl" />
                </Link>
            </div>
            <div className="relative w-full h-full overflow-hidden basis-[50%]">
                <img
                    src="https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png"
                    alt=""
                    className="w-full h-full object-cover translate-x-20"
                />
            </div>
        </div>
    );
};

export default Banner;
