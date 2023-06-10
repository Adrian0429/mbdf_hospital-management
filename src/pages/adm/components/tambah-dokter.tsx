import InputBox from "@/components/InputBox";
import React from 'react';
import {AiFillCheckCircle} from 'react-icons/ai'
import {AiFillCloseCircle} from 'react-icons/ai'
import DateSelection from "@/components/DateSelection";

function TambahDokter({Open, setOpen}){
    
    function handleClick(name: string){
        setOpen(name);
    }
    return(
        <main className='flex flex-col w-[100%] px-20'>
           <div className="pt-20 text-4xl font-bold mt-12">Tambah <span className="text-green-800">Dokter</span></div>
           <div className="w-[800px] item-center mt-8 border border-black border-opacity-20 h-[450px] rounded-3xl shadow-lg ">
                <div className="rounded-3xl h-[10%] mt-3 grid grid-cols-2 grid-rows-4" >
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                        <h1 className="ml-2">Nama</h1>
                        <InputBox className="w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Nama Dokter'></InputBox>
                    </div>
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                        <h1 className="ml-2">Tanggal Lahir</h1>
                        <div>
                            <DateSelection className={"w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3]"}></DateSelection>
                        </div>
                    </div >
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-24 flex flex-col">
                        <h1 className="ml-2">Jenis Kelamin</h1>
                        <div className="mt-3">
                            <input
                                type="radio"
                                className="ml-2 form-radio text-[#156C6D] border-2 border-[#808080] bg-inherit h-5 w-5"
                                id="laki-laki"
                                value="laki-laki"
                                name="gender"
                            />
                            <label htmlFor="laki-laki" className='ml-4 font-medium'>Laki-laki</label>

                            <input 
                                type="radio"
                                className="ml-4 form-radio text-[#156C6D] border-2 border-[#808080] bg-inherit h-5 w-5"
                                id="perempuan"
                                value="perempuan"
                                name="gender"
                            />
                            <label htmlFor="perempuan" className='ml-4 font-medium'>Perempuan</label>
                        </div>
                    </div>
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-24 flex flex-col">
                        <h1 className="ml-2">Harga Konsultasi</h1>
                        <InputBox className="w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Rp.'></InputBox>
                    </div>
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-40 flex flex-col">
                        <h1 className="ml-2 mt-2">No. Telepon</h1>
                        <InputBox className="w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Nomor Telepon'></InputBox>
                    </div>
                    <div></div>
                    <div className="text-[#404040] text-xl font-semibold tracking-tight leading-none ml-8 mr-8 mt-60 flex flex-col">
                        <h1 className="ml-2 mt-2">Nama Poli</h1>
                        <div className="relative w-[300px]">
                            <select
                                className="mt-3 block w-full py-2 px-6 text-gray-800 bg-[#F3F3F3] border border-[#DEDEDE] rounded-xl focus:outline-none focus:ring focus:ring-green-800"
                            >
                                <option value="" disabled selected>Poli</option>
                                <option value="option1">Penyakit Dalam</option>
                                <option value="option2">OBGYN</option>
                                <option value="option3">Mata</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-80 ml-48 text-green-800">
                        <button className="ml-16" onClick={() => handleClick('list-dokter')}>
                            <AiFillCheckCircle className="text-4xl"></AiFillCheckCircle>
                        </button>
                        <button className="ml-2" onClick={() => handleClick('list-dokter')}>
                            <AiFillCloseCircle className="text-4xl"></AiFillCloseCircle>
                        </button>
                    </div>
                </div>
           </div>
        </main>
    )
}

export default TambahDokter;