
import React from 'react'
import { useState, useEffect } from 'react'
import { useKeenSlider } from "keen-slider/react"

function Plans() {
    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        duration: 1000,
        spacing: 20,
        slidesPerView: 1,
        centered: true,
        mode: "snap",
        breakpoints: {
            "(min-width: 768px)": {
                slidesPerView: 2,
                mode: "free-snap",
            },
            "(min-width: 1200px)": {
                slidesPerView: 3,
                mode: "free-snap",
            },
        },
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
    })

    React.useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })
        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })
    }, [sliderRef])

    React.useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()

            }
        }, 2000)
        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    return (
        <div>

            <div className=" ">
                <div className="bg-white md:flex flex overflow-x-hidden mx-2 mt-4 space-x-2 keen-slider " ref={sliderRef}>

                    <div className="curve-div keen-slider__slide">

                        <div className="">
                            <div className="single">
                                <div className="icon">
                                    <img style={{ "width": "50px" }} src="/images/networks/7.png" alt="" className="" />
                                    <p className="text-1">Monthly <span>Plan</span></p>
                                </div>
                                <h4 className="lasthead">

                                    <small>₦12,000</small> <span>20gb</span>

                                </h4>
                                <p className="text-2">BandWidth (Unlimited)</p>
                            </div>
                        </div>

                    </div>


                    <div className="curve-div keen-slider__slide">

                        <div className="" >
                            <div className="single">
                                <div className="icon">
                                    <img style={{ "width": "50px" }} src="/images/networks/5.png" alt="" className="" />
                                    <p className="text-1">Monthly <span>Plan</span></p>
                                </div>
                                <h4 className="lasthead">

                                    <small>₦5000</small> <span>10gb</span>

                                </h4>
                                <p className="text-2">Bandwidth (Unlimited)</p>
                            </div>
                        </div>

                    </div>

                    <div className="curve-div keen-slider__slide">

                        <div className="" >
                            <div className="single">
                                <div className="icon">
                                    <img style={{ "width": "50px" }} src="/images/networks/6.png" alt="" className="" />
                                    <p className="text-1">Daily <span>Plan</span></p>
                                </div>
                                <h4 className="lasthead">

                                    <small>₦3000</small> <span>20gb</span>

                                </h4>
                                <p className="text-2">Bandwidth (Unlimited)</p>
                            </div>
                        </div>

                    </div>

                    <div className="curve-div keen-slider__slide">

                        <div className="">
                            <div className="single">
                                <div className="icon">
                                    <img style={{ "width": "50px" }} src="/images/networks/1.png" alt="" className="" />
                                    <p className="text-1">weekly <span>Plan</span></p>
                                </div>
                                <h4 className="lasthead">

                                    <small>₦1200</small> <span>2.5gb</span>

                                </h4>
                                <p className="text-2">Bandwidth (Unlimited)</p>
                            </div>
                        </div>

                    </div>

                    <div className="curve-div keen-slider__slide">

                        <div className="">
                            <div className="single">
                                <div className="icon">
                                    <img style={{ "width": "50px" }} src="/images/networks/2.jpeg" alt="" className="" />
                                    <p className="text-1">Monthly<span>Plan</span></p>
                                </div>
                                <h4 className="lasthead">

                                    <small>₦3000</small> <span>3.5gb</span>

                                </h4>
                                <p className="text-2">Bandwidth (Unlimit)</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Plans
