/*
|--------------------------------------------------------------------------
| The home page.
|--------------------------------------------------------------------------
|
| The home page of your application.
|       
*/
import { useState, useEffect } from 'react'
import React from 'react'
import { useKeenSlider } from "keen-slider/react"

import Link from "next/link";
import { H1 } from "./../components/Typography/Headers";
import StoreFront from '../components/Layout/StoreFront'
import { BiTransfer } from "react-icons/bi"
import { GiWifiRouter } from "react-icons/gi"
import { GiCableStayedBridge } from 'react-icons/gi'
import Plans from "@/components/Slider/Plans";
import { RiBillFill } from "react-icons/ri"
export default function Home() {




    return (
        <>

            <div className="index-bg h-full">

                <div className="mt-80">

                    <div className="banner mx-4">


                        <div className=" hidden absolute right-20 md:flex grid-rows-2 top-[5em] space-x-2">
                            <div className=" space-x-2">
                                <div className="icon-display"> <img src="/images/networks/6.png" alt="" /> </div>
                                <div className="icon-display"> <img src="/images/networks/7.png" alt="" /> </div>

                            </div>

                            <div className="space-x-2">
                                <div className="icon-display"> <img src="/images/networks/3.png" alt="" /> </div>
                                <div className="icon-display"><img src="/images/networks/4.png" alt="" />   </div>

                            </div>


                            <div className="space-x-2">
                                <div className="icon-display"> <img src="/images/networks/2.jpeg" alt="" /> </div>
                                <div className="icon-display"><img src="/images/networks/1.png" alt="" />   </div>

                            </div>




                        </div>




                        <div className=" md:w-[48em] md:mt-[-40px] ">
                            <div className=" relative mt-[-12em] md:mt-2 ">
                                <h1 className="text-[#33276a] text-[50px] md:text-[70px] font-bold md:leading-11 w-40 md:w-full"> Powering
                Bill payment of any Subscription</h1>
                                <p className="d-pText text-[30px] w-60 md:w-full">
                                    Make payment with ease on your mobile. Buy airtime, Pay DSTV and GOTV bills.
                </p>
                                <Link href="/user/register">
                                    <a className="action-btn flex justify-center ml-40 md:mt-8" >Sign up</a>
                                </Link>
                            </div>
                        </div>


                    </div>

                </div>

            </div>

            {/* section 2 */}

            <div className="index-bg2 ">


                <div className="md:flex mx-2 mt-20 md:mt-20">
                    <div className="control-box">
                        <div className="tumb">
                            <GiWifiRouter className="control-icons" />
                        </div>
                        <div className="subti">
                            <h3 className="subtitle">Airtime/Data Recharge</h3>
                        </div>
                        <p className="text">
                            We are a registered and licensed company authorized to operate in any part of Nigeria.
              </p>
                    </div>

                    <div className="control-box">
                        <div className="tumb">
                            <GiCableStayedBridge className="control-icons" />
                        </div>
                        <div className="subti">
                            <h3 className="subtitle">Cable Subscription</h3>
                        </div>
                        <p className="text">
                            We are a registered and licensed company authorized to operate in any part of Nigeria.
              </p>
                    </div>



                    <div className="control-box">
                        <div className="tumb">
                            <BiTransfer className="control-icons" />
                        </div>
                        <div className="subti">
                            <h3 className="subtitle">Fund Transfer</h3>
                        </div>
                        <p className="text">
                            We are a registered and licensed company authorized to operate in any part of Nigeria.
              </p>
                    </div>

                    <div className="control-box">
                        <div className="tumb">
                            <RiBillFill className="control-icons" />
                        </div>
                        <div className="subti">
                            <h3 className="subtitle">Bill Payment</h3>
                        </div>
                        <p className="text">
                            We are a registered and licensed company authorized to operate in any part of Nigeria.
              </p>
                    </div>

                </div>

                <div className="h-40">

                </div>



            </div>


            {/* Section 3 */}


            <Plans />

            {/* section 4 */}

            <div className="mt-10 mb-10 ">

                <div className="mx-4">
                    <div className=" md:flex">


                        <div className="upper-content">
                            <h4 className="lasthead-h">Bill Payment</h4>
                            <h2 className="title wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">Easy Payment and Instant Receive</h2>
                            <p className="text wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                                The simple way to grow your money like the world’s most sophisticated investors.
                </p>
                            <div className="deposit">
                                <div className="offer">
                                    <h3 className="subtitle my-3">We are Offering from</h3>
                                    <div className="offer-box" style={{ backgroundImage: "url('/images/offer-box-bg.png')" }}>
                                        <div className="offer-item">
                                            <div className="icon">
                                                <img src="/images/offer-icon-1.png" alt="" className="offer-icon" />
                                            </div>
                                            <div className="">
                                                <h2 className="text-white">20 Channel</h2>
                                                <p className="text-white">GOTV</p>
                                            </div>
                                        </div>
                                        <div className="arrow">
                                            <img src="/images/offer-icon-1.png" alt="" className="arrow-pic" />
                                        </div>
                                        <div className="offer-item" >
                                            <div className="icon">
                                                <img src="/images/offer-icon-1.png" alt="" />
                                            </div>
                                            <div className="">
                                                <h2 className="text-white">30 Channel</h2>
                                                <p className="text-white">DSTV</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/" >
                                    <a className="action-btn flex justify-center ml-40 mt-6">View all Plans </a>
                                </Link>
                            </div>

                        </div>



                        <div className="delve md:flex mt-40">

                            <div className="">
                                <div className="simi">
                                    <div className="feature-box one">
                                        <div className="tumb">
                                            <img src="/images/networks/ed.png" alt="" />
                                        </div>
                                        <p className="text-inn">
                                            The fast & simple way to Sub
                    </p>

                                    </div>
                                </div>



                                <div className="simi" >
                                    <div className="feature-box two">
                                        <div className="">
                                            <img src="/images/networks/dstv.png" alt="" />
                                        </div>
                                        <p className="text-inn">
                                            Professional, Safe & Secure
                    </p>
                                    </div>
                                </div>

                            </div>

                            <div>

                                <div className="simi">
                                    <div className="feature-box three">
                                        <div className="tumb">
                                            <img src="/images/networks/go.png" alt="" />
                                        </div>
                                        <p className="text-inn">
                                            Multi-Currency Support
                    </p>

                                    </div>
                                </div>



                                <div className="simi">
                                    <div className="feature-box four">
                                        <div className="tumb">
                                            <img src="/images/networks/5.png" alt="" />
                                        </div>
                                        <p className="text-inn">
                                            Our people are available for you 24/7
                    </p>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}
