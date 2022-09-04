import React, { useState } from "react";
import Header from "../components/Header/Header";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const Account = () => {
    return (
        <>
            <Header />
            <div className="px-[100px] pb-[100px]">
                <div className="w-[700px] h-full m-auto bg-[#fff] border border-solid border-[#e1e1e1]">
                    <Tabs
                        defaultActiveKey="1"
                        className="bg-[#f2f2f2] border-b border-[#e1e1e1] px-12"
                    >
                        <TabPane
                            tab="Account"
                            key="1"
                            className="user-tab-item"
                        >
                            <div className="h-full">
                                <div className="flex m-auto">
                                    <div className="w-full h-auto">
                                        <div className="w-full h-[150px] relative">
                                            <div className="w-full h-full relative bg-[#e9e9e9] overflow-hidden">
                                                <img
                                                    src="https://salinaka-ecommerce.web.app/images/defaultBanner.accdc757f2c48d61f24c4fbcef2742fd.jpg"
                                                    alt=""
                                                    className="w-full h-full object-cover absolute "
                                                />
                                            </div>
                                            <div className="w-[100px] h-[100px] rounded-[50%] border-2 border-solid border-[#fff] left-6 bottom-[30%] relative bg-[#e1e1e1] overflow-hidden">
                                                <img
                                                    src="http://chiase24.com/wp-content/uploads/2022/02/tang-hap-hanh-anh-avatar-hai-haeac-nhan-la-ba_t-caea_i-1.jpg"
                                                    alt=""
                                                    className="w-full h-full rounded-[50%] object-cover"
                                                />
                                            </div>
                                            {/* thay the button bang Link */}
                                            <button className="button button-small absolute right-5 bottom-[-12%] bg-[#101010] text-white">
                                                Edit Account
                                            </button>
                                        </div>
                                        <div className="pt-36 px-7 pb-12">
                                            <h2 className="capitalize font-bold text-3xl my-4">
                                                Trung Le
                                            </h2>
                                            <span className="text-[#4a4a4a] text-[1.4rem] font-semibold my-5">
                                                Email
                                            </span>
                                            <br />
                                            <h5 className="text-[#1a1a1a] text-2xl font-semibold my-5">
                                                trunglvb.hust@gmail.com
                                            </h5>
                                            <span className="text-[#4a4a4a] text-[1.4rem] font-semibold my-5">
                                                Address
                                            </span>
                                            <br />
                                            <h5 className="text-[#4a4a4a] text-2xl font-semibold my-5 italic">
                                                Address not set
                                            </h5>
                                            <span className="text-[#4a4a4a] text-[1.4rem] font-semibold my-5">
                                                Mobile
                                            </span>
                                            <br />
                                            <span className="text-[#4a4a4a] text-[1.4rem] font-semibold my-5">
                                                Date joined
                                            </span>
                                            <br />
                                            <h5 className="text-[#1a1a1a] text-2xl font-semibold my-5">
                                                August 22, 2022
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane
                            tab="My Wish List"
                            key="2"
                            className="user-tab-item"
                        >
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane
                            tab="My Orders"
                            key="3"
                            className="user-tab-item"
                        >
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default Account;
