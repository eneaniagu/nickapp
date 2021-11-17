
import { useEffect, ReactElement } from "react";
import Link from 'next/link'
import { navbarLinks as link, navbarLinks } from '../../NavigationMenu'
import { FiAirplay } from 'react-icons/fi'
import { FiAlignRight } from 'react-icons/fi'
import { logout } from "./../../store/auth/authActions";
import { Router, useRouter } from 'next/router'
import { connect } from 'react-redux'



function Minnav(props: any): ReactElement {

    console.log(props)

    const router = useRouter()








    return (

        <div className={props.isOpen ? " text-center items-center minnav" : "hidden"} >
            <div className="h-40 text-white ">
                <div className="h-10 md:hidden">

                </div>

                <h2 className="mb-8 text-xl heading-text" onClick={props.toggle}> Start searching for car</h2>


                <div className="flex justify-center md:hidden">
                    <div className=" h-[0.5px] bg-[#a3a3a8] w-80 "></div>
                </div>

                <div className="mt-[5em] space-y-8 navB">
                    {link.map((nav) => {
                        const { id, text, path } = nav;
                        return (
                            <div className="text-2xl hover-nav" onClick={props.toggle}>
                                <Link href={path}>
                                    <a className="hover-nav">{text}</a>
                                </Link>
                            </div>

                        )
                    })}

                </div>

            </div>



            <div className=" bg-black md:hidden  min-div" style={{
                borderTopRightRadius: '30px',
                borderTopLeftRadius: '30px',
            }} >
                <>
                    {
                        props.usersdata.isAuthenticated
                            ?
                            <div className="text-white text-2xl flex p-2 space-x-[7em] mx-4">
                                <div onClick={props.toggle}>
                                    <Link href="home/profile">
                                        <a className="hover-nav">Profile</a>
                                    </Link>
                                </div>
                                <div onClick={() => {
                                    router.push("/user/login");
                                    props.logout();
                                    // props.toggle();
                                }}>

                                    <a className="hover-nav">logout</a>

                                </div>

                            </div>
                            :

                            <>
                            </>
                    }

                </>

            </div >
        </div >



    )
}


const mapStateToProps = (state: any) => ({
    usersdata: state.auth
});

export default connect(mapStateToProps, { logout })(Minnav);


