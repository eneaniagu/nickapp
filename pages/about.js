import React from 'react'

function about() {
    return (
        <div className="mt-[-45px]">
            <div className="h-[36em] w-full bg-cover md:bg-cover  md:bg-gradient-to-r bg-center bg-top md:bg-top bg-black" style={{ backgroundImage: `url('/images/abt.jpg')` }}>
                <div className="ml-20 absolute mt-20 ">
                    <h1 className="absolute ml-[12px] text-3sm mt-[4px] text-white">About</h1>
                    <svg width="100" height="40" viewBox="0 0 103 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 13L1 1L56 1" stroke="url(#paint0_linear)" stroke-opacity="0.8" stroke-linecap="round"></path>
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
                <div className=" flex ml-40 mt-40  absolute">
                    <div className=" space-y-4">
                        <h1 className="text-white text-4xl">Moxieus is a tight-knit team with senior product experience.</h1>


                    </div>
                </div>
            </div>


            <div className="">

                <div className="mx-10 my-10">
                    <div className="md: flex space-y-4 text-white">
                        <p className="text-lg md:w-[15em]">

                            One thing we’ve learned from our years within growing startups is that throwing more people at a problem rarely hastens solving it.
                        </p>

                        <p className="text-lg md:w-[15em]">

                            We keep our team intentionally small, bringing on only those with the skills, experience and enthusiasm required to create real impact — both for our business, and for yours.
                        </p>
                        <p className="text-lg md:w-[15em]">

                            We keep our team intentionally small, bringing on only those with the skills, experience and enthusiasm required to create real impact — both for our business, and for yours.
</p>
                        <p className="text-lg md:w-[15em]">

                            We keep our team intentionally small, bringing on only those with the skills, experience and enthusiasm required to create real impact — both for our business, and for yours.
</p>
                    </div>
                    <div className="md:flex space-x-10">

                        <div className="teams">
                            <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/teams/1.jpg" alt="Man looking at item at a store" />
                            <div className="mt-[-50px] ml-8">
                                <h5 className="text-white">Denial ergo</h5>
                                <span className="text-white text-sm ">Senoir Software Dev</span>
                            </div>
                        </div>

                        <div className="teams">
                            <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/teams/2.jpg" alt="Man looking at item at a store" />
                            <div className="mt-[-50px] ml-8">
                                <h5 className="text-white">Denial ergo</h5>
                                <span className="text-white text-sm ">Senoir Software Dev</span>
                            </div>
                        </div>

                        <div className="teams">
                            <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/teams/1.jpg" alt="Man looking at item at a store" />
                            <div className="mt-[-50px] ml-8">
                                <h5 className="text-white">Denial ergo</h5>
                                <span className="text-white text-sm ">Senoir Software Dev</span>
                            </div>
                        </div>

                        <div className="teams">
                            <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/teams/3.jpg" alt="Man looking at item at a store" />
                            <div className="mt-[-50px] ml-8">
                                <h5 className="text-white">Denial ergo</h5>
                                <span className="text-white text-sm ">Senoir Software Dev</span>
                            </div>
                        </div>

                        <div className="teams ">
                            <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/teams/3.jpg" alt="Man looking at item at a store" />
                            <div className="mt-[-50px] ml-8">
                                <h5 className="text-white">Denial ergo</h5>
                                <span className="text-white text-sm ">Senoir Software Dev</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default about
