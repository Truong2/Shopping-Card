import React from "react";
import TitleSignUp from "../components/Sign/Title/TitleSignUp";
import InputList from "../components/Sign/Input/InputList";
import Or from "../components/Sign/Or/Or";
import FooterItemSignUp from "../components/Sign/Footer/FooterSignUp";
import SubmitSignUp from "../components/Sign/Input/Submit/SubmitSignUp";
function SignUp() {
    return(
        <div className="border border-solid border-[#c5c5c5] w-[765px] h-[488px] mt-[100px] ml-[400px]">
            <TitleSignUp/>
            <div className="flex relative">
                <div className="flex">
                    <InputList/>
                    <Or/>
                </div>
            </div>
            <SubmitSignUp/>
            <FooterItemSignUp/>
        </div>
    )
}
export default SignUp;
