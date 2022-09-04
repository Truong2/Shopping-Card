import React from "react";
function EditItem(props) {
    return(
        <div>
            <div className="input-group mb-[24px]">
                <label className="label-input color-[#696868] font-bold text-xl ml-[12px] mt-[12px]" for="fullname">
                    * {props.title}
                </label>
                <br></br>
                <input type="text" id="fullname" 
                className="input-form undefined border border-[#c5c5c5] border-solid mt-[12px] pl-[12px] pr-[380px] py-[12px] text-2xl font-bold " 
                name="fullname" 
                placeholder={props.placeholder} value=""/>
                    
            </div>
        </div>
    )
}
export default EditItem;