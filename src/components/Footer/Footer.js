import React from "react";
import logo from '../../images/logo-full.png'
function Footer() {
    return(
        <div className="bg-[#f0f0f0] mt-48">
            <div className="footer-list h-96">
                <div className="footer grid grid-cols-3 pt-20">
                    <div className="footer-item flex pl-32 pt-20 text-xl font-medium">
                        <div className="footer-content text-gray-700">
                            Developed by 
                        </div>
                        <div className="footer-link">
                            <a href="http://https://github.com/jgudo" className="underline pl-1 text-black">
                                JULIUS GUEVARRA
                            </a>
                        </div>
                    </div>
                    <div className="footer-item text-center">
                        <div className="footer-img pl-64">
                            <img src={logo} alt="" />
                        </div>
                        <div className="footer-year pt-12 text-2xl font-semibold text-black">
                            © 2022
                        </div>
                    </div>
                    <div className="footer-item flex pt-24 pl-96 text-xl font-medium">
                        <div className="footer-project text-gray-700">
                            Fork this project
                        </div>
                        <div className="footer-here">
                            <a href="https://github.com/jgudo/ecommerce-react" className="pl-1 underline text-black">HERE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;