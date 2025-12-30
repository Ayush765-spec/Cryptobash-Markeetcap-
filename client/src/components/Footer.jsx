import React from "react";

import logo from "../../images/logo.png";

const Footer = () => (
    <div className="w-full flex md:justify-center justify-between items-center flex-col gradient-bg-footer">
        <div className="w-full max-w-7xl px-4 md:px-20 py-16">
            <div className="w-full flex sm:flex-row flex-col justify-between items-start mb-12">
                <div className="flex flex-[0.5] justify-start items-center mb-8 sm:mb-0">
                    <img src={logo} alt="logo" className="w-40 cursor-pointer" />
                </div>
                <div className="flex flex-1 justify-start items-start flex-wrap sm:justify-end gap-6 sm:mt-0">
                    <p className="text-white text-base text-center cursor-pointer hover:text-[#37c7da] transition-colors duration-300">Market</p>
                    <p className="text-white text-base text-center cursor-pointer hover:text-[#37c7da] transition-colors duration-300">Exchange</p>
                    <p className="text-white text-base text-center cursor-pointer hover:text-[#37c7da] transition-colors duration-300">Tutorials</p>
                    <p className="text-white text-base text-center cursor-pointer hover:text-[#37c7da] transition-colors duration-300">Wallets</p>
                </div>
            </div>

            <div className="flex justify-center items-center flex-col mb-12">
                <p className="text-white text-lg text-center mb-4 font-light">Come join us and hear for the unexpected miracle</p>
                <p className="text-white text-base text-center font-medium hover:text-[#37c7da] transition-colors duration-300 cursor-pointer">info@kryptomastery.com</p>
            </div>

            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-8" />

            <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-white text-sm text-center sm:text-left opacity-70">@kryptomastery2022</p>
                <p className="text-white text-sm text-center sm:text-right opacity-70">All rights reserved</p>
            </div>
        </div>
    </div>
);

export default Footer;
