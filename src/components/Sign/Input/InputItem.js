import React from "react";
function InputItems(props) {
    return(
            <div class="input-group mt-4">
                <label className="label-input text-[#696868] text-xl font-semibold ml-4 mt-8" for="email">{props.title}</label>
                <br></br>
                <input type="email" id="email" 
                className="input-form text-2xl font-semibold border border-solid border-[#c5c5c5] mt-4 py-3 pl-6 pr-672 w-[360px]" 
                name="email" 
                placeholder={props.placeholder} value=""/>     
            </div>
    )
}
export default InputItems;