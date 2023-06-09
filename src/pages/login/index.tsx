import React, { useState } from 'react';
import Image from "next/image"
import Link from "next/link";
import imageSrc from '/public/register-kiri.png'
import InputBox from '../register/components/InputBox';
import ButtonLink from '@/components/ButtonLink';

const register = () => {

  const [gender, setGender] = useState('');
  const handleGenderChange = (selectedGender: string) => {
    setGender(selectedGender);
  };

  return (
    <div className='max-h-[99vh] flex flex-row'>
       <div className="relative w-[38%] bg-[#156C6D] h-[100vh]">
            <Image className='relative top-0 h-[100vh]'
                src={imageSrc} 
                alt={"register"}
                height={300}
                width={900}
            ></Image>
       </div>
       <div className="w-[60%] bg-[#F1FAF9] max-h-[100vh]">
        <div className="text-[#404040] text-3xl font-semibold tracking-tight leading-none ml-16 mt-48 mb-5">
              Masuk untuk akun
        </div>
        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-3 flex flex-col">
            <h1 className="ml-2">Alamat Email</h1>
            <InputBox className="border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black" placeholder='Masukkan alamat email anda'></InputBox>
        </div>
        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-4 flex flex-col">
            <h1 className="ml-2">Password</h1>
            <InputBox className="border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black" placeholder='Masukkan password anda'></InputBox>
        </div>
        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none flex flex-col items-center ml-16 mt-6 mr-8 align-middle">
            <div className="text-[#404040] text-lg font-medium tracking-tight leading-none flex items-center w-80">
                <ButtonLink href={"/register"} className="bg-[#156C6D] text-white w-80 text-center">Masuk</ButtonLink>
            </div>
            <p className="text-gray-500 text-sm mt-3 pl-2">
            Belum memiliki akun ? 
            <Link href={"/register"} className="ml-2 text-[#156C6D] font-semibold">
              Daftar Sekarang
            </Link>
          </p>
        </div>
        
        
       </div>
    </div>
    
  )
}

export default register
