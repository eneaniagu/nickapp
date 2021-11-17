
import Image from 'next/image'
import { IoGrid } from "react-icons/io5";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { CgOptions } from "react-icons/cg";
import { RiMenu4Line } from "react-icons/ri"
import { useEffect, useState } from "react";
import { HiMenuAlt4 } from 'react-icons/hi'
import { logout } from "./../../store/auth/authActions";
import { connect } from "react-redux"
import Link from 'next/link'
import { navbarLinks as link } from '../../NavigationMenu'
import { Router, useRouter } from 'next/router'





const Nav = (props: any) => {
    const router = useRouter()

    useEffect(() => {
        if (props.usersdata.isAuthenticated == false) {

        }
        else {

            if (!props.usersdata.isAuthenticated) {
                router.push("/user/login");
            }
            [props.usersdata.isAuthenticated]
        }

    });



    return (
        <div>

            <nav className={props.clicks ? "flex justify-between items-center w-full h-[11.3em] text-block relative  font-mono navbar" : "flex justify-between items-center w-full h-[4.5em] text-block fixed font-mono navbar"}

            >

                <div className="text-black md:ml-10 ml-6">
                    <Link href="/">
                        <h2 className="text-2xl icon-hover">𝖒𝖔𝖝𝖎𝖊𝖚𝖘</h2>
                    </Link>
                </div>


                <div className="md:flex  mt-[8px] hidden ">


                    <div className="space-x-4 mr-4 orderlist text-black font-serif">
                        {link.map((nav) => {
                            const { id, text, path } = nav;
                            return (

                                <Link href={path}>
                                    <a className="hover-nav">{text}</a>
                                </Link>


                            )
                        })}
                    </div>


                </div>

                <div className="md:mr-20 mr-[40px]">

                    <div className="" onClick={props.toggle}>
                        {
                            props.clicks ? <HiMenuAlt4 className="text-black text-2xl md:hidden icon-hover" />

                                : <RiMenu4Line className="text-black text-2xl md:hidden icon-hover" />
                        }
                    </div>

                    <div className={props.usersdata.isAuthenticated ? " mt-[-3px] ml-[-8em] hidden md:flex " : " hidden md:flex "}>
                        <h1 className="icon-hover  absolute ml-[12px] text-3sm mt-[18px] text-black"> Request</h1>
                        <svg width="128" height="60" viewBox="0 0 103 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L1 1L56 1" stroke="url(#paint0_linear)" stroke-opacity="0.8" stroke-linecap="round"></path>
                            <path d="M102 20V26H51" stroke="url(#paint1_linear)" stroke-opacity="0.8" stroke-linecap="round"></path>
                            <defs>
                                <linearGradient id="paint0_linear" x1="1.00001" y1="2.04348" x2="55.2949" y2="2.04348" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                </linearGradient>

                                <linearGradient id="paint1_linear" x1="102" y1="26" x2="73.4746" y2="26" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white"></stop>
                                    <stop offset="1" stop-color="white" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>


                    {
                        props.usersdata.isAuthenticated
                            ?
                            <div className="text-black font-serif md:flex space-x-4 mt-[-2.3em] hidden ">

                                <Link href="home/profile">
                                    <a className="hover-nav">Profile</a>
                                </Link>

                                <div onClick={() => {
                                    props.logout();
                                }}>

                                    <a className="hover-nav">logout</a>

                                </div>

                            </div>
                            :

                            <>
                            </>
                    }

                </div>
            </nav>
        </div>
    )
}


const mapStateToProps = (state: any) => ({
    usersdata: state.auth
});

export default connect(mapStateToProps, { logout })(Nav);

