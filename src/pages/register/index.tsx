import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import imageSrc from "/public/register-kiri.png";
import InputBox from "../../components/InputBox";
import GenderRadio from "./components/GenderRadio";
import ButtonLink from "@/components/ButtonLink";

type RegisterFormInput = {
  NIK_pasien: string;
  nama: string;
  Jenis_Kelamin: string;
  Tanggal_Lahir: string;
  No_Telepon: string;
  Email: string;
  Password: string;
};

const Register = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterFormInput>();

  const onSubmit = async (data: RegisterFormInput) => {
    try {
      const response = await axios.post(
        "http://localhost:8888/api/pasien/register",
        data
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-h-[99vh] flex flex-row border">
      <div className="relative w-[38%] bg-[#156C6D] h-[100vh]">
        <Image
          className="relative top-0 h-[100vh]"
          src={imageSrc}
          alt={"register"}
          height={300}
          width={900}
        ></Image>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[62%] bg-[#F1FAF9] max-h-[100vh]"
      >
        <div className="text-[#404040] text-3xl font-semibold tracking-tight leading-none ml-16 mt-6 mb-3">
          Daftarkan akun
        </div>

        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-3 flex flex-col">
          <h1 className="ml-2">Nama</h1>
          <input
            {...register("nama", { required: "nama is required" })}
            className="py-2 px-6 rounded-xl text-sm font-normal border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black"
          />
          {errors.nama && (
            <span className="text-rose-600">{errors.nama.message}</span>
          )}
        </div>
        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-3 flex flex-col">
          <h1 className="ml-2">NIK</h1>
          <input
            {...register("NIK_pasien", { required: "NIK is required" })}
            className="py-2 px-6 rounded-xl text-sm font-normal border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black"
          />
          {errors.NIK_pasien && (
            <span className="text-rose-600">{errors.NIK_pasien.message}</span>
          )}
        </div>
        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-3 flex flex-col">
          <h1 className="ml-2">Alamat Email</h1>
          <input
            {...register("Email", { required: "Email is required" })}
            className="py-2 px-6 rounded-xl text-sm font-normal border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black"
          />
          {errors.Email && (
            <span className="text-rose-600">{errors.Email.message}</span>
          )}
        </div>
        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-3 flex flex-col">
          <h1 className="ml-2">Nomor Telepon</h1>
          <input
            {...register("No_Telepon", { required: "Email is required" })}
            className="py-2 px-6 rounded-xl text-sm font-normal border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black"
          />
          {errors.No_Telepon && (
            <span className="text-rose-600">{errors.No_Telepon.message}</span>
          )}
        </div>
        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-3 flex flex-col">
          <h1 className="ml-2">Tanggal Lahir</h1>
          <input
            {...register("Tanggal_Lahir", { required: "Email is required" })}
            className="py-2 px-6 rounded-xl text-sm font-normal border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black"
          />
          {errors.Tanggal_Lahir && (
            <span className="text-rose-600">
              {errors.Tanggal_Lahir.message}
            </span>
          )}
        </div>
        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-3 flex flex-col">
          <h1 className="ml-2">Jenis Kelamin (L atau P)</h1>
          <input
            {...register("Jenis_Kelamin", {
              required: "Jenis Kelamin is required",
            })}
            className="py-2 px-6 rounded-xl text-sm font-normal border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black"
          />
          {errors.Jenis_Kelamin && (
            <span className="text-rose-600">
              {errors.Jenis_Kelamin.message}
            </span>
          )}
        </div>
        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none ml-16 mr-8 mt-4 flex flex-col">
          <h1 className="ml-2">Password</h1>
          <input
            {...register("Password", { required: "Email is required" })}
            className="py-2 px-6 rounded-xl text-sm font-normal border border-[#DCD7D7] mt-3 bg-[#F8F7F7] text-black"
          />
          {errors.Password && (
            <span className="text-rose-600">{errors.Password.message}</span>
          )}
        </div>
        <div className="text-[#404040] text-lg font-medium tracking-tight leading-none flex flex-col items-center ml-16 mt-6 mr-8 align-middle">
          <div className="text-[#404040] text-lg font-medium tracking-tight leading-none flex items-center w-80">
            <button
              onClick={handleSubmit(onSubmit)}
              className="bg-[#156C6D] text-white w-80 text-center py-2 px-6 rounded-md"
            >
              Daftar
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-3 pl-2">
            Sudah memiliki akun ?
            <Link href={"/login"} className="ml-2 text-[#156C6D] font-semibold">
              Masuk Sekarang
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
