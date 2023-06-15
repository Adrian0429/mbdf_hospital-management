import { TiPencil } from "react-icons/ti";
import { AiFillPlusCircle } from "react-icons/ai";
import axios from "axios";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

interface PerawatList {
  id_perawat: string;
  nama_perawat: string;
  tanggal_lahir: string;
}

function ListPerawat({
  Open,
  setOpen,
}: {
  Open: string;
  setOpen: (name: string) => void;
}) {
  const [perawats, setPerawats] = useState<PerawatList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the bearer token from local storage
        if (token) {
          const response = await axios.get<PerawatList>(
            "http://localhost:8888/api/admin/perawat",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the bearer token
              },
            }
          );

          setPerawats(response.data);
          console.log("sukses list perawat admin");
          console.log(perawats);
        }
      } catch (error) {
        console.log(error);
        console.log("? mbuh");
      }
    };

    fetchData();
  }, [perawats]);

  function handleClick(name: string) {
    setOpen(name);
  }
  return (
    <main className="flex flex-col w-[100%] px-20">
      <div className="pt-20 text-4xl font-bold">
        List <span className="text-green-800">Perawat</span>
      </div>
      <div className="flex justify-end">
        <button onClick={() => handleClick("tambah-perawat")}>
          <AiFillPlusCircle className="mt-10 mr-8 mb-5 text-4xl text-green-800"></AiFillPlusCircle>
        </button>
      </div>
      <div className="item-center border border-black border-opacity-20 h-[400px] rounded-3xl shadow-lg grid-row-2 overflow-auto">
        <div className="flex flex-row justify-start rounded-3xl h-[10%] mt-3">
          <div className="w-[20%] flex items-center justify-center text-center  font-medium text-gray-500 ">
            ID
          </div>
          <div className="w-[20%] flex items-center justify-center text-center  text-ml font-medium text-gray-500">
            Nama
          </div>
          <div className="w-[20%] flex items-center justify-center text-center text-y-center text-ml font-medium text-gray-500">
            Tanggal Lahir
          </div>
        </div>
        {perawats.map((Perawat, id) => (
          <div
            key={id}
            className="flex flex-row space-x-4 my-2 mx-5 justify-center"
          >
            <div className="bg-slate-200 w-full rounded-xl py-2 px-2 flex flex-row">
              <div className="ml-14 w-[20%]">{Perawat.id_perawat}</div>
              <div className="w-[20%]">{Perawat.nama_perawat}</div>
              <div className="w-[20%]">{Perawat.tanggal_lahir}</div>
              <div className="ml-auto flex">
                <button onClick={() => handleClick("edit-perawat")}>
                  <BiEditAlt className="mr-3 text-2xl"></BiEditAlt>
                </button>
                <a href="">
                  <AiOutlineInfoCircle className="text-2xl"></AiOutlineInfoCircle>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ListPerawat;
