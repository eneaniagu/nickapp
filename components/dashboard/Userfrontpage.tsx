import Link from 'next/link'
import React from 'react'
import { MdVerifiedUser } from 'react-icons/md'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FiArrowUp } from 'react-icons/fi'

function Userfrontpage() {
    return (
        <div className="bg-[#fbf6ef]">
            <div className="mt-20">
                <div className="h-[200px] w-full bg-[#0e1766]">
                    <div className="text-center">
                        <h3 className="text-2xl text-white">Verify Your Profile</h3>
                        <div className="flex mt-6">
                            <MdVerifiedUser className="text-5xl text-white" />
                            <h3 className="text-lg leading-7 text-white">
                                verify your email to gain full control of your account.
                        </h3>
                        </div>

                        <Link href="">
                            <a className="action-btn2 flex justify-center ml-[140px] mt-4" >verify email</a>
                        </Link>


                    </div>

                </div>
            </div>

            {/* section 2 */}
            <div className="flex mx-4 mt-6 space-x-4">

                <div className="shadow-md border h-[7em] w-[11em] ">
                    <div className="flex mt-2">
                        <h3 className="text-sm text-[#505692]">
                            Account Balance
                    </h3>
                        <AiOutlineArrowDown className="text-xl ml-8 text-[#505692]" />
                    </div>

                    <h3 className="text-xl">
                        $0.000
                    </h3>
                    <div className="h-6"></div>
                    <Link href="">
                        <a className="text-sm">historys</a>
                    </Link>
                </div>


                <div className="shadow-md border h-[7em] w-[11em]">
                    <div className="flex mt-2">
                        <h3 className="text-[#505692] text-sm">
                            Transactions<br /><span className="text-sm">(airtime,sub & bill)</span>
                        </h3>
                        <FiArrowUp className="text-xl  ml-8 text-[#505692]" />
                    </div>

                    <h3 className="text-xl">
                        $0.000
                    </h3>
                    <div className="h-2"></div>
                    <Link href="">
                        <a className="text-sm">historys</a>
                    </Link>
                </div>


            </div>
            {/* section 3 */}

            <div className="text-center">
                <Link href="">
                    <a className="action-btn3 flex justify-center ml-[13px] mt-4" >Add Fund</a>
                </Link>

            </div>
            {/* section 4 */}

            <div className="mt-4">
                <div className="flex">
                    <hr className="border w-40" /> <span className="mt-[-1em]">Payment</span> <hr className="border w-40" />
                </div>
                <div className=" items-center flex">
                    <Link href="">
                        <a className="ml-[130px] action-btn2 flex justify-center mt-4"> Make payment </a>
                    </Link>
                </div>
            </div>


            <div className="flex mt-10">
                <hr className="border w-40" /> <span className="mt-[-1em]">Daily Historys</span> <hr className="border w-20" />
            </div>

            <div className="mx-4 mt-10 space-y-4">

                <div className="transaction-box shadow-lg bg-white">
                    <h4 className="text-lg ml-20"> Dstv Subscription</h4>
                    <div className="flex space-x-4  ml-4 mt-2">
                        <img src="/images/di.jpeg" className="w-[2em] h-[2em]" />
                        <h3> $0.000</h3>
                    </div>
                    <h4 className="ml-[17em]"> Monthly sub</h4>
                    <h3 className="text-green-700 ml-4">Successfull</h3>


                </div>

                <div className="transaction-box shadow-lg bg-white">
                    <h4 className="text-lg ml-20"> Dstv Subscription</h4>
                    <div className="flex space-x-4  ml-4 mt-2">
                        <img src="/images/di.jpeg" className="w-[2em] h-[2em]" />
                        <h3> $0.000</h3>
                    </div>
                    <h4 className="ml-[17em]"> Monthly sub</h4>
                    <h3 className="text-green-700 ml-4">Successfull</h3>


                </div>

                <div className="transaction-box shadow-lg bg-white">
                    <h4 className="text-lg ml-20"> Dstv Subscription</h4>
                    <div className="flex space-x-4  ml-4 mt-2">
                        <img src="/images/di.jpeg" className="w-[2em] h-[2em]" />
                        <h3> $0.000</h3>
                    </div>
                    <h4 className="ml-[17em]"> Monthly sub</h4>
                    <h3 className="text-green-700 ml-4">Successfull</h3>


                </div>


            </div>

        </div>
    )
}

export default Userfrontpage
