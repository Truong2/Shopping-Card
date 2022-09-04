import React from "react";
import TitleSignIn from "../components/Sign/Title/TitleSignIn";
import InputList from "../components/Sign/Input/InputList";
import Or from "../components/Sign/Or/Or";
import FooterItemSignIn from "../components/Sign/Footer/FooterSignIn";
import SubmitSignIn from "../components/Sign/Input/Submit/SubmitSignIn";
export default function SignIn() {
    return(
        <div className="border border-solid border-[#c5c5c5] w-[765px] h-[488px] mt-[100px] ml-[400px]">
            <TitleSignIn/>
            <div className="flex relative">
                <div className="flex">
                    <InputList/>
                    <Or/>
                </div>
            </div>
            
            <SubmitSignIn/>
            <FooterItemSignIn/>
        </div>
    )
}