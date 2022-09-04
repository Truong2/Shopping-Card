import React from "react";
import flagEditAccount from '../../../../images/FlagEditAccount.png'
function Phone() {
    return(
        <div>
            <div className="input-group mb-[24px]">
                <label className="label-input color-[#696868] font-bold text-xl ml-[12px] mt-[12px]" for="fullname">
                    Mobile Number (Will be used for checkout)
                </label>
                <br></br>
                <div class=" react-tel-input" className="border border-[#c5c5c5] border-solid w-[556px] flex h-[41px]">
                    <img src={flagEditAccount} className ="border border-[#c5c5c5] border-solid bg-cover h-[40px]" alt="" srcset="" />
                    <input placeholder="09254461351" type="tel" 
                    className="input-form d-block form-control text-2xl font-bold ml-[8px]"
                    value="+63"/>
                </div>
            </div>
        </div>
    )
}
export default Phone;