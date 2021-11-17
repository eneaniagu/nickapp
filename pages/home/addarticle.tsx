import Link from 'next/link'
import React from 'react'

function addarticle() {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                <form action="" className="space-y-6">
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Titile</label>
                        <input type="text" name="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>

                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Post Caption</label>
                        <input type="text" name="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>

                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Body</label>
                        <textarea  name="email" className="w-full p-2 border border-gray-300 rounded mt-1" />
                    </div>
                    <div>
                        <label htmlFor="" className="text-sm font-bold text-gray-600 block">Email</label>
                        <input type="file" name="upload image" className="w-full p-2 border  bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm" />
                    </div>
                    <div>
                        <button className="w-full py-4 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default addarticle
