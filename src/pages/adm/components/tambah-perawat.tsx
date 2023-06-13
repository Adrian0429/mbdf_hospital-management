import InputBox from "@/components/InputBox";
import React from 'react';
import {AiFillCheckCircle} from 'react-icons/ai'
import {AiFillCloseCircle} from 'react-icons/ai'
import DateSelection from "@/components/DateSelection";

function TambahPerawat({Open, setOpen}){
    
    function handleClick(name: string){
        setOpen(name);
    }
    return(
        <main className='flex flex-col w-[100%] px-20'>
           <div className="pt-20 text-4xl font-bold mt-12">Tambah <span className="text-green-800">Perawat</span></div>
           <div className="w-[600px] item-center mt-8 border border-black border-opacity-20 h-[450px] rounded-3xl shadow-lg ">
                <div className="rounded-3xl h-[10%] mt-3 flex flex-col" >
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                        <h1 className="ml-2">Nama</h1>
                        <InputBox className="w-[400px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Nama Dokter'></InputBox>
                    </div>
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-4 flex flex-col">
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
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-4 flex flex-col">
                        <h1 className="ml-2">Tanggal Lahir</h1>
                        <div>
                            <DateSelection className={"w-[400px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3]"}></DateSelection>
                        </div>
                    </div >
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-4 flex flex-col">
                        <h1 className="ml-2 mt-2">No. Telepon</h1>
                        <InputBox className="w-[400px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Nomor Telepon'></InputBox>
                    </div>
                    <div className="mt-10 ml-96 text-green-800">
                        <button className="ml-16" onClick={() => handleClick('list-perawat')}>
                            <AiFillCheckCircle className="text-4xl"></AiFillCheckCircle>
                        </button>
                        <button className="ml-2" onClick={() => handleClick('list-perawat')}>
                            <AiFillCloseCircle className="text-4xl"></AiFillCloseCircle>
                        </button>
                    </div>
                </div>
           </div>
        </main>
    )
}

export default TambahPerawat;