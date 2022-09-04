import React from "react";

const StepTracker = ({ current }) => {
    const className = (step) =>
        current === step
            ? "bg-black text-[#fff] font-semibold"
            : step < current
            ? "bg-[#c5c5c5] text-white"
            : "";
    return (
        <div className="flex justify-center sticky top-24 bg-[#f9f9f9] px-[1rem] mb-[3rem] ">
            <ul className="w-[40%] flex justify-between items-center p-0 m-auto relative before:content-[''] before:absolute before:top-[15px] before:left-[35px] before:m-auto before:w-[85%] before:h-[3px] before:bg-[#DCDCDC]">
                <li className={`flex justify-center bg-border`}>
                    <div className="flex justify-center items-center w-[100px] flex-col z-10">
                        <div>
                            <h4 className={`flex items-center justify-center m-0 p-6 bg-[#e1e1e1] rounded-[50%] w-[30px] h-[30px] text-[#818181] ${className(1)}`}>1</h4>
                        </div>
                        <h6 className="text-[#b6b6b6] mt-[1.3rem] font-semibold">Order Summary</h6>
                    </div>
                </li>
                <li className={`flex justify-center bg-border`}>
                    <div className="flex justify-center items-center w-[100px] flex-col z-10">
                        <div>
                            <h4 className={`flex items-center justify-center m-0 p-6 bg-[#e1e1e1] rounded-[50%] w-[30px] h-[30px] text-[#818181] ${className(2)}`}>2</h4>
                        </div>
                        <h6 className="text-[#b6b6b6] mt-[1.3rem] font-semibold">Shipping Details</h6>
                    </div>
                </li>
                <li className={`flex justify-center bg-border`}>
                    <div className="flex justify-center items-center w-[100px] flex-col z-10">
                        <div>
                            <h4 className={`flex items-center justify-center m-0 p-6 bg-[#e1e1e1] rounded-[50%] w-[30px] h-[30px] text-[#818181] ${className(3)}`}>3</h4>
                        </div>
                        <h6 className="text-[#b6b6b6] mt-[1.3rem] font-semibold">Payment</h6>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default StepTracker;
