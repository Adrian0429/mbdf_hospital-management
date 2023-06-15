import InputBox from "@/components/InputBox";
import React, { useState, useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import DateSelection from "@/components/DateSelection";
import Input from "./input";
import { Controller, FormProvider, useForm } from "react-hook-form";
import axios from "axios";

interface kodeList {
  poli_kode_poli: string;
}

type AddDokter = {
  nama_dokter: string;
  jenis_kelamin: string;
  tanggal_lahir: string;
  no_telepon: string;
  harga_Konsul: string;
  poli_kode_poli: string;
};

function TambahDokter({ Open, setOpen }) {
  const [Kode, setKode] = useState<kodeList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the bearer token from local storage
        if (token) {
          const response = await axios.get<kodeList>(
            "http://localhost:8888/api/admin/dokter/polis",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the bearer token
              },
            }
          );
          setKode(response.data);
        }
      } catch (error) {
        console.log(error);
        console.log("error");
      }
    };
    fetchData();
  }, [Kode]);

  const methods = useForm<AddDokter>();
  const { register, handleSubmit } = methods;

  function handleClick(name: string) {
    setOpen(name);
  }

  const onSubmit = async (data: AddDokter) => {
    console.log(data);
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const response = await axios.post(
        `http://localhost:8888/api/admin/dokter/new`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response) console.log("berhasil");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main className="flex flex-col w-[100%] px-20">
      <div className="pt-20 text-4xl font-bold mt-12">
        Tambah <span className="text-green-800">Dokter</span>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-[800px] item-center mt-8 border border-black border-opacity-20 h-[450px] rounded-3xl shadow-lg ">
            <div className="rounded-3xl h-[10%] mt-3 grid grid-cols-2 grid-rows-4">
              <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                <h1 className="ml-2">Nama</h1>
                <Input
                  className="w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black"
                  placeholder="Nama Dokter"
                  id="nama_dokter"
                  type="text"
                ></Input>
              </div>
              <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                <h1 className="ml-2">Tanggal Lahir</h1>
                <div>
                  <Input
                    className="w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3]"
                    placeholder="Select Date"
                    id="tanggal_lahir"
                    type="date"
                  ></Input>
                </div>
              </div>
              <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-24 flex flex-col">
                <h1 className="ml-2">Jenis Kelamin</h1>
                <div className="mt-3 flex flex-row">
                  <Input
                    type="radio"
                    className="ml-2 form-radio text-[#156C6D] border-2 border-[#808080] bg-inherit h-5 w-5"
                    placeholder="Laki-Laki"
                    id="jenis_kelamin"
                    value="L"
                  />
                  <label htmlFor="laki-laki" className="ml-4 font-medium">
                    Laki-laki
                  </label>

                  <Input
                    type="radio"
                    className="ml-2 form-radio text-[#156C6D] border-2 border-[#808080] bg-inherit h-5 w-5"
                    placeholder="Perempuan"
                    id="jenis_kelamin"
                    value="P"
                  />
                  <label htmlFor="perempuan" className="ml-4 font-medium">
                    Perempuan
                  </label>
                </div>
              </div>
              <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-24 flex flex-col">
                <h1 className="ml-2">Harga Konsultasi</h1>
                <Input
                  className="w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black"
                  placeholder="Rp."
                  id="harga_Konsul"
                  type="text"
                ></Input>
              </div>
              <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-40 flex flex-col">
                <h1 className="ml-2 mt-2">No. Telepon</h1>
                <Input
                  className="w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black"
                  placeholder="Nomor Telepon"
                  id="no_telepon"
                  type="text"
                ></Input>
              </div>
              <div></div>
              <div className="text-[#404040] text-xl font-semibold tracking-tight leading-none ml-8 mr-8 mt-60 flex flex-col">
                <h1 className="ml-2 mt-2">Nama Poli</h1>
                <div className="relative w-[300px]">
                  <select
                    {...register("poli_kode_poli")}
                    className="mt-3 block w-full py-2 px-6 text-gray-800 bg-[#F3F3F3] border border-[#DEDEDE] rounded-xl focus:outline-none focus:ring focus:ring-green-800"
                    id="poli_kode_poli"
                    name="poli_kode_poli"
                  >
                    <option value="" disabled selected>
                      Poli
                    </option>
                    {Kode.map((kode, index) => (
                      <option key={index} value={kode.poli_kode_poli}>
                        {kode.poli_kode_poli}
                      </option>
                    ))}
                  </select>

                </div>
              </div>
              <div className="mt-80 ml-48 text-green-800">
                <button type="submit" className="ml-16">
                  <AiFillCheckCircle className="text-4xl"></AiFillCheckCircle>
                </button>
              </div>
            </div>
          </div>
        </form>
      </FormProvider>
    </main>
  );
}

export default TambahDokter;
