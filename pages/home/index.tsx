import { stat } from 'fs'
import React from 'react'
import { start } from 'repl'
import { connect } from 'react-redux'

function index(props:any) {
     console.log(props)
    return (
        <div className="mx-2">
            
            <div className="border shadow-md mt-4" >
                  <h2>Welcome back mr <a className="text-[#f5a039]">{props.data.user.name}</a>.</h2>

                  {
                      props.data.user.email_verified_at == null ? 
                      <div className="mt-4 mb-4">
                      <h2 className="text-red-400">Please do well to confirm your email</h2>
                  </div>

                      :
                      <>
                      </>

                  }

                </div>

                 <div className="">
                     <h3 className="font-bold text-2lg text-[#f3a79a]">Your Recent article</h3>
                     <hr className=" bg-[#0a2641]"/>
                     <div className="">
                        <>
                        <div className="grid md:grid-cols-2 gap-4 m:mx-10 my-10 bg-gray-50">

                <div className="shadow-xl">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/user.png" alt="Man looking at item at a store" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm  font-semibold text-mixs text-[#9a5855]">Case study</div>
                                <a href="#" className="block mt-1 text-lg leading-tight font-medium  hover:underline">Finding customers for your new business</a>
                                <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                            </div>
                        </div>
                    </div>

                </div>


                <div className="shadow-xl">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/user.png" alt="Man looking at item at a store" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm  font-semibold text-mixs text-[#9a5855]">Case study</div>
                                <a href="#" className="block mt-1 text-lg leading-tight font-medium  hover:underline">Finding customers for your new business</a>
                                <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="shadow-xl">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/user.png" alt="Man looking at item at a store" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm  font-semibold text-mixs text-[#9a5855]">Case study</div>
                                <a href="#" className="block mt-1 text-lg leading-tight font-medium  hover:underline">Finding customers for your new business</a>
                                <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="shadow-xl">
                    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-48 w-full object-cover md:h-full md:w-48" src="/images/user.png" alt="Man looking at item at a store" />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm  font-semibold text-mixs text-[#9a5855]">Case study</div>
                                <a href="#" className="block mt-1 text-lg leading-tight font-medium  hover:underline">Finding customers for your new business</a>
                                <p className="mt-2 text-gray-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
                        </> 
                     </div>
                 </div>



                <div className="">
                    Article counting
                </div>
                         
        </div>
    )
}
const mapStateToProps = (state: any) => ({
    data: state.auth
});

  

export default connect(mapStateToProps)(index)
