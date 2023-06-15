import { AiFillPlusCircle } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

interface DokterList {
  ID_Dokter: string;
  nama_dokter: string;
  tanggal_lahir: string;
  nama_poli: string;
}

function ListDokter({
  Open,
  setOpen,
}: {
  Open: string;
  setOpen: (name: string) => void;
}) {
  const [doctors, setDoctors] = useState<DokterList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the bearer token from local storage
        if (token) {
          const response = await axios.get<DokterList>(
            "http://localhost:8888/api/admin/dokter",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the bearer token
              },
            }
          );

          setDoctors(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [doctors]);

  function handleClick(name: string) {
    setOpen(name);
  }
  return (
    <main className="flex flex-col w-[100%] px-20">
      <div className="pt-20 text-4xl font-bold">
        List <span className="text-green-800">Dokter</span>
      </div>
      <div className="flex justify-end">
        <button onClick={() => handleClick("tambah-dokter")}>
          <AiFillPlusCircle className="mt-10 mr-8 mb-5 text-4xl text-green-800"></AiFillPlusCircle>
        </button>
      </div>
      <div className="item-center border border-black border-opacity-20 h-[400px] rounded-3xl shadow-lg grid-row-2 overflow-auto">
        <div className="flex flex-row justify-start rounded-3xl h-[10%] mt-3">
          <div className=" w-[20%] flex items-center justify-center text-center  font-medium text-gray-500 ">
            ID
          </div>
          <div className=" w-[20%] flex items-center justify-center text-center  text-ml font-medium text-gray-500">
            Nama
          </div>
          <div className=" w-[20%] flex items-center justify-center text-center text-ml font-medium text-gray-500">
            Poli
          </div>
          <div className=" w-[20%] flex items-center justify-center text-center text-y-center text-ml font-medium text-gray-500">
            Tanggal Lahir
          </div>
        </div>
        {doctors.map((Doctor, index) => (
          <div
            key={index}
            className="flex flex-row space-x-4 my-2 mx-5 justify-center"
          >
            <div className="bg-slate-200 w-full rounded-xl py-2 px-2 flex flex-row grid-cols-5">
              <div className="ml-14 w-[20%]">{Doctor.ID_Dokter}</div>
              <div className=" w-[20%]">{Doctor.nama_dokter}</div>
              <div className=" w-[20%]">{Doctor.nama_poli}</div>
              <div className=" ml-3 w-[20%]">
                {Doctor.tanggal_lahir.substring(0, 10)}
              </div>
              <div className="ml-auto flex">
                {/* <Link href={`adm/edit_dokter/${Doctor.ID_Dokter}`}>
                  <BiEditAlt className="mr-3 text-2xl"></BiEditAlt>
                </Link> */}
                <button onClick={() => handleClick("edit-dokter")}>
                  <BiEditAlt className="mr-3 text-2xl"></BiEditAlt>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ListDokter;
