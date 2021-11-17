import React from 'react'
import { ImTwitter } from "react-icons/im"
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from "react-icons/fa"



function Footer() {
    return (
        <div className="footer-banner bottom-0">
            <div className="h-4 md:h-[8em]">

            </div>
            <div className="md:flex md:space-x-10">


                <div className="mt-10 md:mt-8">
                    <div className="">
                        <div className=""><img src="/images/logo.png" alt="" /></div>
                        <p className="text text-white mt-4 text-center
                                 ">Powering Secure Payments and Global Finance <br /> We trade on forex, cryptocurrencies, stocks, bonds, futures and commodities with the best financial experts.</p>
                    </div>
                </div>


                <div className="mt-10 md:mt-2 text-center">
                    <div className="footer-box">
                        <h3 className="subtitle  text-white">Pages</h3>
                        <ul className="space-y-4 mt-4 text-white md:flex md:space-x-4 md:space-y-0">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#affiliate">Affiliates</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="subtitle text-white">Contacts</h3>
                    <ul className="space-y-4 text-white">
                        <li> <a href="#mailto" className="">Nico@gmail.com </a> </li>
                        <li> 090987747474 </li>
                        <li> Alaba oji lga lagos </li>

                    </ul>
                </div>








            </div>


            <div className="text-center md:flex">
                <div className=" mt-20 text-white md:ml-[30em]">
                    <p className="text">Copyright &copy; 2021. All Rights Reserved By <a href="#">Moxieus Technology</a></p>
                </div>
                <div className="flex space-x-4 absolute mt-[-6em] ml-[8em] md:mt-[-8em] md:ml-[200px]  md:relative">
                    <a href="#"><ImTwitter className="social-link" /></a>
                    <a href="#"><FaFacebookSquare className="social-link" /></a>
                    <a href="#"><FaInstagramSquare className="social-link" /></a>
                </div>
            </div>




        </div>
    )
}

export default Footer
