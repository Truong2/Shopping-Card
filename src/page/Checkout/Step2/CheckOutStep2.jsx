import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import * as ROUTE from "../../../constants/routes";
import Header from "../../../components/Header/Header";
import StepTracker from "../components/StepTracker";
import { useNavigate } from "react-router-dom";
const CheckOutStep2 = () => {
    let navigate = useNavigate();
    return (
        <div className="bg-[#f9f9f9] min-h-[100vh]">
            <Header />
            <StepTracker current={2} />
            <div className="w-[80rem] m-auto">
                <div className="flex items-center justify-between">
                    <button
                        className="button button-large bg-[#f2f2f2] text-[#7d7d7d] text-[1.7rem] font-semibold border border-solid border-[#e1e1e1] "
                        onClick={() => navigate(ROUTE.CHECKOUT_STEP_1)}
                        type="button"
                    >
                        <ArrowLeftOutlined />
                        &nbsp; Go Back
                    </button>
                    <button
                        className="button button-large bg-[#1a1a1a] text-white font-semibold text-[1.6rem]"
                        type="submit"
                        // onClick={() => navigate(ROUTE.CHECKOUT_STEP_3)}
                    >
                        Next Step &nbsp;
                        <ArrowRightOutlined />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckOutStep2;
