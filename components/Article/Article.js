import React from 'react'

function Article() {
    return (
        <div className="bg-gray-50 ">
            <div className="h-[36em] w-full bg-cover md:bg-cover  md:bg-gradient-to-r bg-center bg-top md:bg-top bg-black" style={{ backgroundImage: `url('/images/1.jpg')` }}>
                <div className="ml-20">
                    <h1 className="absolute ml-[12px] text-3sm mt-[4px] text-white">Article</h1>
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
                <div className=" flex md:ml-40 mt-10 ml-20">
                    <div className=" space-y-4">
                        <h1 className="text-white text-4xl">TECHNOLOGY,</h1>
                        <h1 className="text-white text-4xl"> BUSINESS AND </h1>
                        <h1 className="text-white text-4xl"> DESIGN. </h1>

                    </div>
                </div>
            </div>
            

            <div class="grid md:grid-cols-2 gap-4 m:mx-10 my-10 bg-gray-50">

                <div class="shadow-xl">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="md:flex-shrink-0">
                                <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/user.png" alt="Man looking at item at a store" />
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-mixs">Case study</div>
                                <a href="#" class="block mt-1 text-lg leading-tight font-medium  hover:underline">Finding customers for your new business</a>
                                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="shadow-xl">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="md:flex-shrink-0">
                                <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/user.png" alt="Man looking at item at a store" />
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-mixs">Case study</div>
                                <a href="#" class="block mt-1 text-lg leading-tight font-medium  hover:underline">Finding customers for your new business</a>
                                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="shadow-xl">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="md:flex-shrink-0">
                                <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/user.png" alt="Man looking at item at a store" />
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-mixs">Case study</div>
                                <a href="#" class="block mt-1 text-lg leading-tight font-medium  hover:underline">Finding customers for your new business</a>
                                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div class="shadow-xl">
                    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div class="md:flex">
                            <div class="md:flex-shrink-0">
                                <img class="h-48 w-full object-cover md:h-full md:w-48" src="/images/user.png" alt="Man looking at item at a store" />
                            </div>
                            <div class="p-8">
                                <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold text-mixs">Case study</div>
                                <a href="#" class="block mt-1 text-lg leading-tight font-medium  hover:underline">Finding customers for your new business</a>
                                <p class="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Article
