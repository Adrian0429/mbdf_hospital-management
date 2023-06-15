import { TiPencil } from "react-icons/ti";
import axios from "axios";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { useEffect, useState } from "react";

interface PasienList {
  count: number;
  nik_pasien: string;
  nama: string;
  tanggal_lahir: string;
}

function ListPasien({
  Open,
  setOpen,
}: {
  Open: string;
  setOpen: (name: string) => void;
}) {
  const [pasiens, setPasiens] = useState<PasienList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the bearer token from local storage
        if (token) {
          const response = await axios.get<PasienList>(
            "http://localhost:8888/api/admin/pasien",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the bearer token
              },
            }
          );
          setPasiens(response.data);
        }
      } catch (error) {
        console.log(error);
        console.log("Error");
      }
    };

    fetchData();
  }, [pasiens]);

  function handleClick(name: string) {
    setOpen(name);
  }
  return (
    <main className="flex flex-col w-[100%] px-20">
      <div className="pt-20 text-4xl font-bold">
        List <span className="text-green-800">Pasien</span>
      </div>
      <div className="item-center mt-24 border border-black border-opacity-20 h-[400px] rounded-3xl shadow-lg grid-row-2 overflow-auto grid-cols-3">
        <div className="flex flex-row justify-start rounded-3xl h-[10%] mt-3">
          <div className=" w-[20%] flex items-center justify-center text-center font-medium text-gray-500 ">
            NIK
          </div>
          <div className="  w-[20%] flex items-center justify-center text-center  text-ml font-medium text-gray-500">
            Nama
          </div>
          <div className="  w-[20%] flex items-center justify-center text-center text-ml font-medium text-gray-500">
            Tanggal Lahir
          </div>
        </div>
        {pasiens.map((Pasien, id) => (
          <div
            key={id}
            className="flex flex-row space-x-4 my-2 mx-5 justify-center"
          >
            <div className="bg-slate-200 w-full rounded-xl py-2 px-2 flex flex-row grid-cols-3">
              <div className=" ml-10 w-[20%] text-sm">{Pasien.nik_pasien}</div>
              <div className=" ml-5 w-[20%]">{Pasien.nama}</div>
              <div className="w-[20%]">{Pasien.tanggal_lahir.substring(0,10)}</div>
              <div className="ml-auto flex">
                <button onClick={() => handleClick("edit-pasien")}>
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

export default ListPasien;
