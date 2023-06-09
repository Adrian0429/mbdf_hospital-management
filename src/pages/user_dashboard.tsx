import Link from 'next/link'
import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlinePoweroff} from 'react-icons/ai'


const user_dashboard = () => {
  return (
    <div className='flex'>
        <div className="w-[319px] h-screen shadow-xl border border-black-100 relative">
            <h1 className="absolute text-2xl top-[50px] left-[56.34px]"><span className="font-bold text-green-800">Hospital</span> logo</h1>
            <div className=" absolute top-[200px] left-[63px] w-[257px] h-[250px] grid grid-rows-5 items-center">
                <div className='flex'>
                    <div className=" w-[20%] h-full"><AiFillHome className="text-2xl text-green-800"></AiFillHome></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-md" href={''}>Dashboard</Link></div>
                    <div className=" w-[2%] bg-green-800 rounded-lg">
                    </div>
                </div>
                <div className='group flex'>
                    <div className=" w-[20%] h-full"><AiOutlineBook className="text-2xl text-gray-400 group-hover:text-green-800"></AiOutlineBook></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-md  text-gray-400 group-hover:text-black" href={''}>Reserve</Link></div>
                    <div className=" w-[2%] rounded-lg">
                    </div>
                </div>
                <div className='group flex'>
                    <div className=" w-[20%] h-full"><AiOutlineShoppingCart className="text-2xl text-gray-400 group-hover:text-green-800"></AiOutlineShoppingCart></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-md  text-gray-400 group-hover:text-black" href={''}>Purchase</Link></div>
                    <div className=" w-[2%] rounded-lg">
                    </div>
                </div>
                <div className='group flex'>
                    <div className=" w-[20%] h-full"><AiOutlineUser className="text-2xl text-gray-400 group-hover:text-green-800"></AiOutlineUser></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-md  text-gray-400 group-hover:text-black" href={''}>Profile</Link></div>
                    <div className=" w-[2%] rounded-lg">
                    </div>
                </div>
                <div className='group flex'>
                    <div className=" w-[20%] h-full"><AiOutlinePoweroff className="text-2xl text-red-600 opacity-40 group-hover:opacity-100"></AiOutlinePoweroff></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-md  text-red-600 opacity-40 group-hover:opacity-100" href={''}>Log Out</Link></div>
                    <div className=" w-[2%] rounded-lg">
                    </div>
                </div>
            </div>
        </div>
        <div className='absolute left-[435px] top-[68px]'>
           <h2 className='font-semibold text-xl'>Welcome, <span className='text-green-800'>Andrian</span></h2>
        </div>
        <div className="absolute left-[1266px] top-[34px] border border-black rounded-lg w-60 h-14">

        </div>

    </div>
  )
}

export default user_dashboard