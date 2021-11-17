import React from 'react'
import { CgVoicemailR } from "react-icons/cg"

function Contact() {
    return (
        <div>
            <div className=" border-2 border-red-800 md:h-[35em] h-[41.5em]  bg-white" style={{
                borderTopRightRadius: '5%',
                zIndex: 99
            }} >

                <div className="md:ml-20 mt-[200px] flex">

                    <div className="">
                        <h1 className="text-4xl">Get in Touch</h1>
                        <p>Freely get reach to us</p>
                        <div className="flex space-x-4">
                            <span className="text-sm">Send mail</span><CgVoicemailR className="text-4xl ml-[30em]" />

                        </div>
                        <div className="absolute mt-[-37px] md:ml-[10em]">
                            <input className="h-[40px]" type="text" placeholder="enter email" />
                        </div>

                    </div>



                    <div className="md:ml-[42rem]">
                        <ul>
                            <div>
                                <span>For Enquiries</span>
                                <li>MoxieusTech@gmail.com</li>
                            </div>
                            <div>
                                <span>For Enquiries</span>
                                <li>MoxieusTech@gmail.com</li>
                            </div>
                            <div>
                                <span>For Enquiries</span>
                                <li>MoxieusTech@gmail.com</li>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Contact
