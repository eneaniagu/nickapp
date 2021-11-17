import React from 'react'
import Image from 'next/image'
import { IoGrid } from "react-icons/io5";
import { IoNotificationsSharp } from "react-icons/io5"
import { IoSearchOutline } from "react-icons/io5";
import { CgOptions } from "react-icons/cg";
import { RiBarChartHorizontalLine } from "react-icons/ri";

function Admin_minMenu(props: any) {
    return (
        <nav className="flex md:hidden bg-[#fbf6ef] justify-between border-b-4 items-center w-full h-[5em]  text-block fixed font-mono navbar top-0">
            <div onClick={props.drawerClicked} className="md:ml-[12px] ml-[12px] h-[2em] w-[2em] md:h-[3em] md:w-[3em] justify-center items-center flex rounded-full "  >
                <img src="/images/logo.png" className=" text-[#f98a8d] w-[2em] h-[2em] md:w-[1.5em] md:h-[1.5em]" />

            </div>
            <h3 className="text-[#0e1766]">Welcome Ani</h3>






            <div className="flex md:mr-[20px] mr-[1px] mt-[8px]">



                <div className="md:h-[4em] md:w-[4em] h-[4em] w-[4em]" onMouseOver={props.hover} onMouseOut={props.hoverout}>
                    <Image
                        width={50}
                        height={50}
                        src='/images/user.png'
                        className="rounded-full md:w-16 md:h-16 h-16 w-16"
                    />
                </div>

            </div>

        </nav>
    )
}

export default Admin_minMenu
