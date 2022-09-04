import React from "react";
function ShopItem(props) {
    return(
        <div>
            <div className="product-item text-center w-72 h-136 border-solid border">
                <div className="product-imagine h-36 ">
                    <img alt="Kulangot" className="product-img bg-cover h-32 pl-10" 
                        src="https://firebasestorage.googleapis.com/v0/b/salinaka-ecommerce.appspot.com/o/products%2FYIZuxWur1W4fAT6z3ejk?alt=media&amp;token=7dca264f-c345-4cfc-93a8-60217a53f66a"/>
                </div>
                <div className="product-details bg-[#fff]">
                    <div className="product-details-name text-2xl font-medium text-black-800 pt-6">
                        {props.name}
                    </div>
                    <div className="product-details-style text-xl font-medium text-slate-400 pt-3 italic">
                        {props.title}
                    </div>
                    <div className="product-details-price text-2xl font-semibold py-12">
                        {props.price}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShopItem;