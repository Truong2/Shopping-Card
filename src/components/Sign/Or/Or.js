import React from "react";
import './Or.css'
import ConnectList from "../Connect/ConnectList";
function Or() {
    return(
        <div className="content text-[#1a1a1a] text-[12px] font-semibold relative">
            <div className="or">
                OR
            </div>
            <div className="absolute top-36 left-40">
                <ConnectList/>
            </div>
        </div>
    )
}
export default Or;