import Layout from "@/components/layout/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

interface Doctor {
  nama_dokter: string;
  nama_poli: string;
}

function Doctor() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Doctor[]>(
          "http://localhost:8888/api/pasien/ListDokter"
        );
        setDoctors(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <main className="flex h-max mx-7 my-6">
        <div className="bg-[#156C6D] w-full h-max rounded-3xl text-left pl-8 pt-8">
          <h1 className="ml-7 text-2xl font-bold text-white">
            Temukan doktormu
          </h1>
          <Image
            src={"./doc1.svg"}
            alt={"Doctor Photo"}
            width={250}
            height={200}
            className="ml-10"
          />
          <Image
            src={"./doc2.svg"}
            alt={"Doctor Photo"}
            width={250}
            height={200}
            className="ml-10"
          />
        </div>
        <div className="relative">
          <div className="bg-white w-[100vh] h-[calc(96vh+1px)] max-h-[100%] rounded-2xl absolute right-0 py-5 px-5 overflow-auto">
            {doctors.map((Doctor, id) => (
              <div
                key={id}
                className="flex flex-row space-x-4 my-2 mx-5 justify-center"
              >
                <div className="bg-[#DEDEDE] w-3/5 rounded-xl py-2 px-2">
                  {Doctor.nama_dokter}
                </div>
                <div className="bg-[#DEDEDE] w-2/4 rounded-xl py-2 px-2">
                  {Doctor.nama_poli}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Doctor;
