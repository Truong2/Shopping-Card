import React, { useState, useEffect } from "react";
import { FilterOutlined } from "@ant-design/icons";
import * as ROUTE from "../../constants/routes";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo-full.png";
import dataHeader from "../data/dataHeader";
import Search from "../Search/Search";
const Header = () => {
    const location = useLocation();
    const [activeIndex, setActiveIndex] = useState(0);
    const [showFilters,setShowFilters] = useState(false)
    const handleOnclickFilters = () => {
        setShowFilters(true)
    }
    useEffect(() => {
        const curPath = location.pathname.split("/")[1];
        const activeItem = dataHeader.findIndex(
            (item) => item.section === curPath
        );

        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);
    return (
        <nav className="flex items-center w-[100%] h-40 bg-primary px-20 pb-2 pt-12 mb-12">
            <div className="pr-10">
                <Link to="/">
                    <img
                        alt="Logo"
                        src={logo}
                        className="w-60 object-contain"
                    />
                </Link>
            </div>
            <ul className="flex pl-0 mr-2 grow">
                {dataHeader.map((item, index) => (
                    <li key={index}>
                        <Link
                            className={`px-5 py-4 text-2xl opacity-50 capitalize ${
                                activeIndex === index && "active"
                            } `}
                            to={item.link}
                        >
                            {item.section}
                        </Link>
                    </li>
                ))}
            </ul>
            {location.pathname === ROUTE.SHOP && (
                <button className="btn text-2xl px-5 py-3 text-[#7d7d7d] bg-[#f2f2f2] border border-[#e1e1e1] font-medium" onClick = {handleOnclickFilters}>
                    Filters &nbsp;
                    <FilterOutlined />
                </button>
            )}
            <Search />
            <li className="ml-24 list-none m-0">
                {/* {location.pathname !== ROUTE.SIGNUP && (
                    <Link
                        className="button-small bg-[#1010101] text-white"
                        to={ROUTE.SIGNUP}
                    >
                        Sign Up
                    </Link>
                )} */}
                <Link
                    className="button-small text-white bg-black "
                    to={ROUTE.SIGNUP}
                >
                    Sign Up
                </Link>
                {/* {location.pathname !== ROUTE.SIGNIN && (
                    <Link
                        className="button-small"
                        to={ROUTE.SIGNIN}
                    >
                        Sign In
                    </Link>
                )} */}
                <Link
                    className="button-small button-muted margin-left-s"
                    to={ROUTE.SIGNIN}
                >
                    Sign In
                </Link>
            </li>
        </nav>
    );
};

export default Header;
