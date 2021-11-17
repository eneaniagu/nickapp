import React from 'react'

function airtime() {
    return (
        <div>
            <div className="max-h-screen bg-gray-50 flex-col justify-center">
                <div className="max-w-md w-full mx-auto">
                    <div className="text-center font-medium text-xl">
                        Something
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mt-2 text-center">Another text</div>
                </div>

                <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                    <form action="" className="space-y-6">
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
                            <input type="text" name="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>

                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
                            <input type="text" name="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>

                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
                            <input type="text" name="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <div>
                            <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
                            <input type="text" name="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                        </div>
                        <div>
                            <button className="w-full py-4 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Submit</button>
                        </div>

                    </form>
                </div>

            </div>

        </div>
    )
}

export default airtime
