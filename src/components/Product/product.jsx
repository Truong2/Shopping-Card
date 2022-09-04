import React from "react";
import { dataItemProduct } from "../data/dataItemProduct";
import { Link } from "react-router-dom";

const product = () => {
  return (
    <div>
      <div className="list-produce grid grid-cols-3 gap-8 mx-20 mt-40 mb-20">
        {dataItemProduct.map((item) => {
          return (
            <div
              key={item.id}
              className="max-h-[32rem] border-[1px] border-solid border-[#e1e1e1]"
            >
              <Link
                to={`/product/${item.id}`}
                className="item w-[100%] overflow-hidden hover:cursor-pointer transition-all "
              >
                <div className="item-produce bg-[#f1f1f1] ">
                  <img
                    className="object-contain hover:scale-105 "
                    src={item.link}
                    alt=""
                  />
                </div>
                <div className="item-details p-8 leading-relaxed">
                  <h2 className="text-[2.4rem] text-[#1a1a1a] font-550 leading-10">
                    {item.name}
                  </h2>
                  <p className="mb-4 text-[1.4rem] font-medium text-[#818181] leading-10">
                    {item.section}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default product;
