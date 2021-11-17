import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

export default function profill() {
    return (
        <>
            <div className="  md:w-[500px] mt-[-50px]">
                <div className="flex justify-center space-x-2 mt-10 absolute">
                    <h1 className="text-[#000] text-xl border-2 text-display ">Start Setting the Future</h1>
                    <h1 className="text-2xl text-[#fa9d8e]">With Moxieus Technology</h1>
                </div>

                <div className="md:mt-80 mt-[400px] absolute ">
                    <div className=" flex justify-center mt-[80px]">
                        <p className="text-2xl text-[#000]"> Check with us and start building <br /> your effective Product.</p>
                    </div>


                    <a className=" flex md:ml-[250px] md:mt-[12em] mt-6 space-x-2 ml-[10em]">
                        <p className=" text-xl text-[#fa9d8e] ">Talk with </p> <BsArrowRight className="text-[#ffff] text-2xl" />
                    </a>


                </div>
            </div>

        </>


    )
}
