import React from "react";
const Banner_feature = (props) => {
    const { urlImg, textHeading } = props;
    return (
        <div>
            <div className="flex flex-row h-[40rem] w-[100%] mt-8 bg-[#f3f3f3] ">
                <div className="flex flex-col items-start justify-center p-20 basis-1/2 ">
                    <h1 className="max-w-[30rem] text-[4.8rem] mb-[1rem] mt-[3.2rem] font-550 leading-[1.2] text-[#1a1a1a]">
                        {textHeading}
                    </h1>
                </div>
                <div className="w-[100%] h-[100%] relative overflow-hidden basis-1/2">
                    <img
                        className="w-[80%] h-[100%] object-cover translate-x-[16rem]"
                        src={urlImg}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};
export default Banner_feature;
