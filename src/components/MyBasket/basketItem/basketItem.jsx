import { CloseOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, toggleQuantityItem } from "../../../Redux/productSlice";
import { useTranslation } from "react-i18next";

const BasketItem = ({ data }) => {
  const { t } = useTranslation();
  const [listItem, setListItem] = useState(data);
  console.log(data, "tét data");
  const dispatch = useDispatch();
  const BasketItem = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #e1e1e1;
    margin-bottom: 1.2rem;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    animation: slide-up 0.5s ease;
  `;
  const Button = styled.button`
    font-size: 1.2rem;
    border: 1px solid #e1e1e1;
    color: #4a4a4a;
    background: transparent;
  `;
  const BasketProduct = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
  `;
  // Format Tiền
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  const handleDeleteProduct = (item) => {
    const action = removeProduct(item.name);
    dispatch(action);
  };
  const handleIncrease = (item, index) => {
    const quantity = item.quantity + 1;
    const total = Number(((item.total * quantity) / (quantity - 1)).toFixed(2));
    const newObj = {
      ...item,
      quantity,
      total,
    };
    const action = toggleQuantityItem({ index, newObj });
    dispatch(action);
    setListItem(data);
  };
  const handleDecrease = (item, index) => {
    const quantity = item.quantity - 1;
    if (quantity === 0) {
      return;
    }
    const total = ((item.total * quantity) / (quantity + 1)).toFixed(2);
    const newObj = {
      ...item,
      quantity,
      total,
    };
    const action = toggleQuantityItem({ index, newObj });
    dispatch(action);
    setListItem(data);
  };
  return (
    <div className="">
      {listItem.map((item, index) => {
        return (
          <BasketItem key={item.id}>
            <div className="w-[3rem] h-[9rem] flex item-center flex-col text-[1.5rem]">
              <Button
                className="w-[3.5rem] h-[100%] p-[0.5rem] hover:bg-[#e0e0e0f3] hover:transition-all  "
                onClick={() => {
                  handleIncrease(item, index);
                }}
              >
                <PlusOutlined />
              </Button>
              <Button
                className={`w-[3.5rem] h-[100%] p-[0.5rem] hover:bg-[#e0e0e0f3] ${
                  Number(item.quantity) > 1
                    ? "hover:cursor-pointer"
                    : "hover:cursor-not-allowed"
                } hover:transition-all `}
                onClick={() => {
                  handleDecrease(item, index);
                }}
              >
                <MinusOutlined />
              </Button>
            </div>
            <BasketProduct className="">
              <div className="w-[9rem] h-[9rem] mr-[1.6rem] relative">
                <img
                  className="w-[100%] h-[100%] object-contain absolute"
                  src={item.link}
                  alt=""
                />
              </div>
              <div className="flex flex-row grow items-center">
                <div className=" basis-9/12 ">
                  <a className="underline" href="#">
                    <h4 className="my-[1.2rem]  w-[14.2rem] whitespace-nowrap overflow-hidden text-ellipsis relative text-[@1a1a1a1] font-bold leading-[1.9rem] text-[1.6rem]">
                      {item.name}
                    </h4>
                  </a>
                  <div className="flex">
                    <div className="w-[33.33333%]">
                      <span className="text-[1.3rem] text-[#8d8d8d] font-bold mb-[0.5rem]">
                        {t("field.quantity")}
                      </span>
                      <h5 className="text-[1.3rem] text-[#1a1a1a] font-bold">
                        {item.quantity}
                      </h5>
                    </div>
                    <div className="w-[33.33333%]">
                      <span className="text-[1.3rem] text-[#8d8d8d] font-bold mb-[0.5rem]">
                        {t("field.size")}
                      </span>
                      <h5 className="text-[1.3rem] text-[#1a1a1a] font-bold">
                        {item.size}
                      </h5>
                    </div>
                    <div className="w-[33.33333%]">
                      <span className="text-[1.3rem] text-[#8d8d8d] font-bold mb-[0.5rem]">
                        {t("field.color")}
                      </span>
                      <div
                        className={`w-[1.5rem] h-[1.5rem] rounded-[50%]`}
                        style={{ background: item.color }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className=" basis-3/12 ">
                  <h4 className="text-black font-bold text-[1.7rem]  ">
                    {formatter.format(item.total)}
                  </h4>
                </div>
              </div>
              <Button
                className="py-[1.4rem] px-[1.3rem] hover:bg-[#e0e0e0f3] hover:transition-all  "
                type="button"
                onClick={() => handleDeleteProduct(item)}
              >
                <span className="text-[1.5rem] flex items-center">
                  <CloseOutlined />
                </span>
              </Button>
            </BasketProduct>
          </BasketItem>
        );
      })}
    </div>
  );
};

export default BasketItem;
