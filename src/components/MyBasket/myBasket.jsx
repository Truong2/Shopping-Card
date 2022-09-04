import React, { useState } from "react";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import BasketItem from "./basketItem/basketItem";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { removeAllProduct } from "../../Redux/productSlice";

const MyBasket = ({ closeMyBasket }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let data = useSelector((state) => state.products);
  const length = data.length;
  const { t } = useTranslation();
  // const elementRef = useRef();
  // useEffect(() => {
  //   const divElement = elementRef.current;
  //   divElement.focus();
  // }, []);
  const handleClose = () => {
    closeMyBasket(false);
  };
  const Basket = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 60rem;
    height: 100vh;
    background: #fff;
    z-index: 20;
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    /* transform: translateX(100%); */
  `;
  const Button = styled.button`
    border: 1px solid #e1e1e1;
    padding: 1.2rem 1.6rem;
    font-size: 1.2rem;
  `;
  const handleNavigate = () => {
    if (length) {
      navigate("/checkout/step1");
    } else {
      return;
    }
  };
  const handleClearAll = () => {
    const action = removeAllProduct([]);
    dispatch(action);
  };
  return (
    <>
      <Basket tabIndex="1">
        <div className="h-[100%] px-[1.6rem] pt-[1.6rem] pb-[10rem] flex flex-col overflow-y-scroll mr-[-1.3rem]">
          <div className="header flex items-center">
            <div className="flex grow my-[1.8rem] ">
              <h3 className=" text-[#1a1a1a] font-550 flex items-end ">
                {t("others.myBasket")}
                <span className="ml-4 text-[1.2rem] text-[#4a4a4a] font-550">
                  ( {length} item )
                </span>
              </h3>
            </div>
            <div className="flex">
              <Button
                className=" text-black  hover:bg-[#e0e0e0f3] hover:transition-all hover:duration-300 font-bold "
                onClick={handleClose}
              >
                {t("button.close")}
              </Button>
              <Button
                className={`text-[#4a4a4a]  ${
                  length
                    ? "hover:cursor-pointer font-bold"
                    : "hover:cursor-not-allowed font-[350]"
                } hover:bg-[#f3f3f3f3] hover:transition-all hover:duration-300`}
                onClick={() => handleClearAll()}
              >
                {t("button.clearBasket")}
              </Button>
            </div>
          </div>
          {data.length >= 1 ? (
            <BasketItem data={data} />
          ) : (
            <>
              <div className="flex grow items-center justify-center">
                <h5 className=" text-[#818181] text-[2rem]">
                  {t("message.emptyBasket")}
                </h5>
              </div>
            </>
          )}
        </div>
        <div className="footer absolute bottom-0 right-0 p-[1.6rem] flex items-center justify-between w-[100%] bg-[#ffff] ">
          <div className="absolute top-0 content-none w-[93%] h-[0.05rem] bg-[#e1e1e1]"></div>
          <div className="">
            <p className=" text-[1.4rem] m-0 text-[#4a4a4a] leading-10 font-550  ">
              {t("field.subTotalAmount")}
            </p>
            <h2 className="basket-total-amount my-[1.2rem] text-[#1a1a1a] text-[2.6rem] font-550">
              $
              {Number(
                data
                  .reduce((total, value, index) => {
                    const sum = Number(value.total);
                    return total + sum;
                  }, 0)
                  .toFixed(2)
              ).toLocaleString()}
            </h2>
          </div>
          <Button
            onClick={handleNavigate}
            className={`${
              length
                ? "opacity-100 hover:cursor-pointer"
                : "opacity-50 hover:cursor-not-allowed"
            } bg-black text-[#fff] font-bold  hover:opacity-40  hover:transition-all hover:duration-300 opacity `}
            style={{
              fontSize: "1.6rem",
              padding: "1.6rem 3.2rem",
            }}
          >
            {t("button.checkout")}
          </Button>
        </div>
      </Basket>
    </>
  );
};

export default MyBasket;
