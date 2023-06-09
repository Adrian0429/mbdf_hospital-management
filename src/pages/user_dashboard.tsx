import Link from 'next/link'
import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlinePoweroff} from 'react-icons/ai'
import {AiOutlineSearch} from 'react-icons/ai'
import {AiOutlineBell} from 'react-icons/ai'
import {BsFillMoonFill} from 'react-icons/bs'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'



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
        <div className="pl-4 absolute left-[1100px] top-[34px] rounded-full w-[422px] h-[61px] flex items-center">
            <AiOutlineSearch className="absolute left-9 top-[32%] w-5 h-6 text-[#166C6D]"></AiOutlineSearch>
            <input type="text" placeholder='Search' className='ml-3 pl-8 w-[214px] h-[41px] rounded-full bg-[#F4F7FE] border-none'/>
            <AiOutlineBell className='ml-2 text-2xl text-gray-400'></AiOutlineBell>
            <BsFillMoonFill className='ml-4 text-xl text-gray-400'></BsFillMoonFill>
            <AiOutlineInfoCircle className='ml-3 text-2xl text-gray-400'></AiOutlineInfoCircle>
            <BiUserCircle className='ml-3 text-4xl text-green-800 '></BiUserCircle>
        </div>
        <div className='border border-black w-[681px] h-[80.07px] absolute left-[421px] top-[200px] grid-cols-2'>
            <div className='rounded-lg border border-black h-full w-1/4'>
                <button className='pl-4 pb-3 w-full h-full flex items-center'>
                        <AiOutlineBook className='mt-2 text-3xl text-green-800'></AiOutlineBook>
                    <div className='flex-col'>
                        <h2 className='ml-2 font-semibold'>Reservasi</h2>
                        <p>Reservasi</p>
                    </div>
                </button>
            </div>

        </div>

    </div>
  )
}

export default user_dashboard