import Link from 'next/link'
import React, { useState } from 'react'
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineBarChart} from 'react-icons/ai'

import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlinePoweroff} from 'react-icons/ai'
import Dashboard from './components/dashboard'
import ListDokter from './components/list-dokter'
import ListPasien from './components/list-pasien'
import ListPerawat from './components/list-perawat'
import Jadwal from './components/jadwal'
import RiwayatTransaksi from './components/riwayat-transaksi'
import { NavLink } from 'react-router-dom'

function user_dashboard(){
    const[Open ,setOpen] = useState('dashboard');
    const menuItem=[
        {
            path:'dashboard',
            icon:<Dashboard/>
        },
        {
            path:'list-dokter',
            icon:<ListDokter/>
        },
        {
            path:'list-pasien',
            icon:<ListPasien/>
        },
        {
            path:'list-perawat',
            icon:<ListPerawat/>
        },
        {
            path:'jadwal',
            icon:<Jadwal/>
        },
        {
            path:'riwayat-transaksi',
            icon:<RiwayatTransaksi/>
        }
    ]

    function handleClick(name: string){
        setOpen(name);
    }
  return (
    <div className='flex'>
        <div className="w-[20%] h-screen shadow-xl border border-black-100 flex flex-col bg-green-800">
            <h1 className="text-2xl mt-20 text-center font-bold text-white">Hospital</h1>
            <div className="mt-20 mx-auto space-y-10">
                <button className='group flex space-x-4 text-xl' onClick={()=>handleClick('dashboard')}>
                    <div className=" w-[20%] h-full"><AiFillHome className="text-2xl text-gray-400 group-hover:text-green-800" style={{color: Open == 'dashboard' ? "rgb(255 255 255 / var(--tw-text-opacity))" : "rgb(156 163 175 / var(--tw-text-opacity))"}}></AiFillHome></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-sm text-gray-400 group-hover:text-black" href={''} style={{color: Open == 'dashboard' ? "#ffffff" : "rgb(156 163 175 / var(--tw-text-opacity))"}}>Dashboard</Link></div>
                </button>
                <button className='group flex space-x-4 text-xl' onClick={()=>handleClick('list-dokter')} >
                <div className=" w-[20%] h-full"><AiOutlineUser className="text-2xl text-gray-400 group-hover:text-green-800"  style={{color: Open == 'list-dokter' ? "rgb(255 255 255 / var(--tw-text-opacity))" : "rgb(156 163 175 / var(--tw-text-opacity))"}}></AiOutlineUser></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-sm  text-gray-400 group-hover:text-black" href={''} style={{color: Open == 'list-dokter' ? "#ffffff" : "rgb(156 163 175 / var(--tw-text-opacity))"}}>List Dokter</Link></div>
                </button>
                <button className='group flex space-x-4 text-xl' onClick={()=>handleClick('list-pasien')}>
                <div className=" w-[20%] h-full"><AiOutlineUser className="text-2xl text-gray-400 group-hover:text-green-800"  style={{color: Open == 'list-pasien' ? "rgb(255 255 255 / var(--tw-text-opacity))" : "rgb(156 163 175 / var(--tw-text-opacity))"}}></AiOutlineUser></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-sm inline-block text-gray-400  group-hover:text-black" href={''} style={{color: Open == 'list-pasien' ? "#ffffff" : "rgb(156 163 175 / var(--tw-text-opacity))"}}>List Pasien</Link></div>
                </button>
                <button className='group flex space-x-4 text-xl' onClick={()=>handleClick('list-perawat')}>
                <div className=" w-[20%] h-full"><AiOutlineUser className="text-2xl text-gray-400 group-hover:text-green-800"  style={{color: Open == 'list-perawat' ? "rgb(255 255 255 / var(--tw-text-opacity))" : "rgb(156 163 175 / var(--tw-text-opacity))"}}></AiOutlineUser></div>
                    <div className=" w-[88%] h-full"><Link className="inline-block font-medium text-sm  text-gray-400 group-hover:text-black" href={''} style={{color: Open == 'list-perawat' ? "#ffffff" : "rgb(156 163 175 / var(--tw-text-opacity))"}}>List Perawat</Link></div>
                </button>
                <button className='group flex space-x-4 text-xl' onClick={()=>handleClick('jadwal')}>
                    <div className=" w-[20%] h-full"><AiOutlineBarChart className="text-2xl text-gray-400 group-hover:text-green-800"  style={{color: Open == 'jadwal' ? "rgb(255 255 255 / var(--tw-text-opacity))" : "rgb(156 163 175 / var(--tw-text-opacity))"}}></AiOutlineBarChart></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-sm  text-gray-400 group-hover:text-black" href={''} style={{color: Open == 'jadwal' ? "#ffffff" : "rgb(156 163 175 / var(--tw-text-opacity))"}}>Jadwal</Link></div>
                </button>
                <button className='group flex space-x-4 text-xl' onClick={()=>handleClick('riwayat-transaksi')}>
                    <div className=" w-[20%] h-full"><AiOutlineBarChart className="text-2xl text-gray-400 group-hover:text-green-800"  style={{color: Open == 'riwayat-transaksi' ? "rgb(255 255 255 / var(--tw-text-opacity))" : "rgb(156 163 175 / var(--tw-text-opacity))"}}></AiOutlineBarChart></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-sm whitespace-nowrap text-gray-400 group-hover:text-black" href={''} style={{color: Open == 'riwayat-transaksi' ? "#ffffff" : "rgb(156 163 175 / var(--tw-text-opacity))"}}>Riwayat Transaksi</Link></div>
                </button>
                <div className='group flex space-x-4 text-xl'>
                    <div className=" w-[20%] h-full"><AiOutlinePoweroff className="text-2xl text-red-600 opacity-40 group-hover:opacity-100"></AiOutlinePoweroff></div>
                    <div className=" w-[88%] h-full"><Link className="font-medium text-sm  text-red-600 opacity-40 group-hover:opacity-100" href={''}>Keluar</Link></div>
                </div>
            </div>
        </div>
        {
            menuItem.map((item, index)=>(
                <div style={{display: Open == item.path ? "block" : "none"}} className='w-[100%]'>
                    {item.icon}
                </div>
                // <NavLink to={item.path} key={index} className="link" activeclassName="active">
                //     <div className="icon">{item.icon}</div>
                //     <div style={{display: Open ? "block" : "none"}} className="link_text">{item.name}</div>
                // </NavLink>
            ))
        }
    </div>
  )
}

export default user_dashboard