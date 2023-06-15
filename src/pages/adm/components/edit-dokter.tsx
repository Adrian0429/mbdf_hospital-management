import InputBox from "@/components/InputBox";
import { AiFillCheckCircle } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";
import { Controller, FormProvider, useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./input";

type Dokters = {
  ID_Dokter: string;
};

type editDokter = {
  ID_Dokter: string;
  nama_dokter: string;
  no_telepon: string;
  harga_Konsul: string;
};

function EditDokter({ Open, setOpen }) {
  const methods = useForm<editDokter>();
  const { register, handleSubmit } = methods;
  const [Kode, setKode] = useState<Dokters[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the bearer token from local storage
        if (token) {
          const response = await axios.get<Dokters>(
            "http://localhost:8888/api/admin/dokter",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the bearer token
              },
            }
          );
          setKode(response.data);
          console.log(Kode);
        }
      } catch (error) {
        console.log(error);
        console.log("error");
      }
    };
    fetchData();
  }, [Kode]);

  function handleClick(name: string) {
    setOpen(name);
  }

  const onSubmit = async (data: editDokter) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.put(
        `http://localhost:8888/api/admin/dokter/edit`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response) {
        console.log("berhasil edit dokter");
        console.log(data);
      }
    } catch (error) {
      console.log(data);
      console.log(error);
    }
  };

  return (
    <main className="flex flex-col w-[100%] px-20">
      <div className="pt-20 text-4xl font-bold mt-12">
        Edit <span className="text-green-800">Dokter</span>
      </div>
      <div className="w-[600px] item-center mt-8 border border-black border-opacity-20 h-[380px] rounded-3xl shadow-lg grid-row-2">
        <div className="flex flex-col justify-start rounded-3xl h-[10%] mt-3">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-[#404040] tYext-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                <select
                  {...register("ID_Dokter")}
                  className="mt-3 block w-full py-2 px-6 text-gray-800 bg-[#F3F3F3] border border-[#DEDEDE] rounded-xl focus:outline-none focus:ring focus:ring-green-800"
                  id="ID_Dokter"
                  name="ID_Dokter"
                >
                  <option value="" disabled selected>
                    ID Dokter
                  </option>
                  {Kode.map((kode, index) => (
                    <option key={index} value={kode.ID_Dokter}>
                      {kode.ID_Dokter}
                    </option>
                  ))}
                </select>
              </div>
              <div className="text-[#404040] tYext-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                <h1 className="ml-2">Nama</h1>
                <Input
                  className="w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black rounded-md"
                  placeholder="Nama Baru"
                  id="nama_dokter"
                  type="text"
                ></Input>
              </div>
              <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                <h1 className="ml-2">No. Telepon</h1>
                <Input
                  className="w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black rounded-md"
                  placeholder="Nomor Baru"
                  id="no_telepon"
                  type="text"
                ></Input>
              </div>
              <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                <h1 className="ml-2">Harga Konsultasi</h1>
                <Input
                  className="w-[300px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black rounded-md"
                  placeholder="Harga Baru"
                  id="harga_Konsul"
                  type="text"
                ></Input>
              </div>
              <div className="mt-12 ml-96 text-green-800">
                <button className="ml-16" type="submit">
                  <AiFillCheckCircle className="text-4xl"></AiFillCheckCircle>
                </button>
                <button
                  className="ml-2"
                  onClick={() => handleClick("list-dokter")}
                >
                  <AiFillCloseCircle className="text-4xl"></AiFillCloseCircle>
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </main>
  );
}

export default EditDokter;
