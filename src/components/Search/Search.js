import React from "react";
import { SearchOutlined, ShoppingOutlined } from "@ant-design/icons";
import { useState } from "react";
import MyBasket from "../MyBasket/myBasket";
import { useSelector } from "react-redux";

const Search = () => {
  const [openBasket, setOpenBasket] = useState(false);
  const data = useSelector((state) => state.products);
  return (
    <div className="flex relative">
      <div className="flex w-[30rem]">
        <SearchOutlined className="flex items-center justify-center absolute left-6 top-0 bottom-0 m-auto text-[#7a7a7a] text-2xl" />
        <input
          type="text"
          placeholder="Search product"
          className="w-full pr-8 pl-16 py-4 text-2xl border outline-none overflow-visible grow"
        />
      </div>
      <ShoppingOutlined
        className={`relative flex justify-center items-center ml-4  `}
        style={{ fontSize: "2.4rem" }}
        onClick={() => setOpenBasket(true)}
      />
      {data.length > 0 ? (
        <span className="absolute top-[-0.6rem] right-[-1.7rem] w-[2.2rem] h-[2.2rem] bg-red-500 rounded-[50%] text-center text-[#ffff] text-bold">
          {data.length}
        </span>
      ) : (
        <></>
      )}
      {openBasket && <MyBasket closeMyBasket={setOpenBasket} />}
    </div>
  );
};

export default Search;
