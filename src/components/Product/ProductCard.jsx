import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
    return (
        <>
            <Link
                to={`/product/${item.id}`}
                className="w-full max-h-[30rem] border border-[#e1e1e1] group cursor-pointer"
            >
                <div className="w-full h-80 bg-[#f1f1f1] relative overflow-hidden">
                    <img
                        src={item.src}
                        alt=""
                        className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500"
                    />
                </div>
                <div className="p-8">
                    <h2 className="mb-1 text-5xl text-[#1a1a1a] font-semibold">
                        {item.title}
                    </h2>
                    <p className="italic text-[#818181] text-2xl leading-10 font-medium">
                        {item.section}
                    </p>
                </div>
            </Link>
        </>
    );
};

export default ProductCard;
