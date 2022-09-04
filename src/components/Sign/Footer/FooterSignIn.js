import React from "react";
function FooterItemSignIn() {
    return(
        <div class="auth-message flex w-[764px] h-[64px] bg-[#f2f2f2] mt-[32px] border border-solid border-[#c5c5c5]">
            <div className="m-auto flex ">
                <span class="auth-info mr-16 flex mt-[16px] text-xl font-bold text-[#4a4a4a]">
                    <strong>Don't have an account?</strong>
                </span>
                <button class="button button-small button-border button-border-gray text-xl button-icon font-bold text-[#4a4a4a]" type="button">
                    Sign Up
                </button>
            </div>
        </div>
        
    )
}
export default FooterItemSignIn;