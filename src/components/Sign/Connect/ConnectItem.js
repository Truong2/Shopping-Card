import React from "react";
function ConnectItem(props) {
    return(
        
        <div className="bg-[#0078ff] w-[250px] mb-[16px]">
            <button className="button auth-provider-button provider-facebook w-[250px] h-[48px] text-white relative" 
             style={{backgroundColor: props.backgroundColor , color: props.color}}
             type="button">
                <span role="img"  className="absolute left-[18px]">
                    <img src={props.img} alt="" />
                </span>
                <div className="left-[52px] text-xl font-bold absolute">
                    Continue with {props.name}     
                </div>
            </button>
        </div>
    )
}
export default ConnectItem;