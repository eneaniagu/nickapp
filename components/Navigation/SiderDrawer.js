import React from 'react'
import { Categories as menu } from '../../NavigationMenu'
import Product from '../Card/Product'
import Link from 'next/link'

import { GoDeviceDesktop } from 'react-icons/go'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BiPhoneCall } from 'react-icons/bi'
import { CgArrowsExchangeV } from 'react-icons/cg'
import { FaDatabase } from 'react-icons/fa'


function SiderDrawer(props) {
    let sideDrawClasses = 'sidebar'
    if (props.show) {
        sideDrawClasses = 'sidebar open'
    }


    return (

        <div className={sideDrawClasses}>

            <div className="mt-20 ml-10">
                <Link href="/dashboard/addfund">
                    <div className="ml-[6.5em] topindex ">

                        <div className=" rounded-full md:w-16 md:h-16 h-20 w-20 mt-4  bg-[#0e1766] text-white flex text-center justify-center items-center">
                            <FaDatabase className="text-5xl" />
                        </div>
                        <h4 className="text-xl">Add Fund</h4>
                    </div>
                </Link>

                <div className="flex ">
                    <Link href="/dashboard/airtime">
                        <div className="topindex">

                            <div className=" rounded-full md:w-16 md:h-16 h-20 w-20 mt-4 bg-[#0e1766] text-white flex text-center justify-center items-center">
                                <BiPhoneCall className="text-5xl" />
                            </div>
                            <h4 className="text-xl">Airtime</h4>
                        </div>
                    </Link>

                    <Link href="/dashboard/cable">
                        <div className="ml-[8em] topindex">

                            <div className=" rounded-full md:w-16 md:h-16 h-20 w-20 mt-4 bg-[#0e1766] text-white flex text-center justify-center items-center">
                                <GoDeviceDesktop className="text-5xl text-white" />
                            </div>
                            <h4 className="text-xl">Cable Sub</h4>
                        </div>
                    </Link>

                </div>



                <div className="flex ">
                    <Link href="/dashboard/airtime">
                        <div className="topindex">
                            <div className=" rounded-full md:w-16 md:h-16 h-20 w-20 mt-4 bg-[#0e1766] text-white flex text-center justify-center items-center">
                                <CgArrowsExchangeV className="text-5xl" />
                            </div>
                            <h4 className="text-xl">Data Sub</h4>
                        </div>
                    </Link>

                    <Link href="/dashboard/bills">
                        <div className="ml-[8em] topindex">

                            <div className=" rounded-full md:w-16 md:h-16 h-20 w-20 mt-4 bg-[#0e1766] text-white flex text-center justify-center items-center">
                                <FaRegMoneyBillAlt className="text-5xl" />
                            </div>
                            <h4 className="text-xl">Pay Bill</h4>
                        </div>
                    </Link>


                </div>

                <div className=" items-center flex mt-10 topindex">
                    <Link href="">
                        <a className="ml-20 action-btn4 flex justify-center mt-4 "> Need a Help </a>
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default SiderDrawer
