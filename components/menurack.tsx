import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

function menurack(props: any) {
    return (
        <div>
            <div className=" goto fixed top-[34em] rounded-full md:w-16 md:h-16 h-16 w-16 mt-4 ml-[17em] bg-[#0e1766] text-white flex text-center justify-center items-center" onClick={props.drawerClicked}>
                {
                    props.drawbol == true ?
                        <RiCloseLine className="text-2xl" />
                        :
                        <h4 className="text-xl">Pay</h4>
                }

            </div>
        </div>
    )
}

export default menurack
