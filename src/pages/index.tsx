import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import ButtonLink from "@/components/ButtonLink";
import { BsArrowRight } from 'react-icons/bs'

const Index = () => {
  return (
    <Layout>
      <div className="max-h-[calc(100%-64px)] flex">
        <div className="pt-32">
          <h1 className="text-[#404040] text-4xl font-extrabold tracking-tight leading-none mb-3">
            <span className="text-[#156C6D] block">
              Kami peduli
            </span>
              dengan kesehatan anda
          </h1>
          <p className=" max-w-lg mb-20 font-light text-gray-400 text-lg">
            Kesehatan ditentukan oleh mental, fisik dan kepribadian yang baik, bukan hanya ketiadaan penyakit. 
          </p>
          <ButtonLink href={"./booking"} className="bg-[#156C6D] text-white text-lg w-max py-4 font-normal">
            Buat reservasi sekarang <BsArrowRight className="inline text-2xl ml-2"/>
          </ButtonLink>
          <p className="text-gray-500 text-sm mt-3 pl-2">
            Belum memiliki akun ? 
            <Link href={"/"} className="ml-2 text-[#156C6D] font-semibold">
              Daftar Sekarang
            </Link>
          </p>
        </div>
        <div className="relative max-w-1/5">
          <Image 
            src={"/landing-image.svg"} 
            alt={""} 
            width={700} 
            height={600}
            className="relative left-16 top-5"
          />
        </div>    
      </div>
    </Layout>
  );
};

export default Index;
