import axios from "axios";
import { useEffect, useState } from "react";

interface Reservasis {
  Tanggal_reservasi: string;
  Nama_dokter: string;
  Nama_diagnosa: string;
  Nama_Ruangan: string;
}

function Reservasi() {
  const [Reservasis, setReservasis] = useState<Reservasis[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const NIK = localStorage.getItem("nik");
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get<Reservasis[]>(
            `http://localhost:8888/api/pasien/${NIK}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setReservasis(response.data);
          console.log(Reservasis);
        }
      } catch (error) {
        console.error("Error fetching NIK:", error);
      }
    };
    fetchData();
  }, [Reservasis]);

  return (
    <main className="flex flex-col w-[100%] h-full px-20">
      <div className="bg-white w-[90%] max-h-[85vh] rounded-2xl px-5 py-7 overflow-auto mx-auto mt-20">
        <h1 className="ml-6 mb-5 text-3xl font-semibold text-[#404040]">
          Riwayat Reservasi
        </h1>
        <div className="flex flex-row space-x-4 my-2 mx-5 justify-center text-center rounded-xl bg-[#166C4D] mb-4">
          <h6 className="w-2/12 p-2 text-xl font-semibold text-white">
            Tanggal
          </h6>
          <h6 className="w-4/12 p-2 text-xl font-semibold text-white">
            Nama Dokter
          </h6>
          <h6 className="w-4/12 p-2 text-xl font-semibold text-white">
            Diagnosis
          </h6>
          <h6 className="w-2/12 p-2 text-xl font-semibold text-white">
            Ruangan
          </h6>
        </div>
        {Reservasis.map((Data, index) => (
          <div
            key={index}
            className="flex flex-row space-x-4 my-3 mx-5 p-3 justify-center rounded-xl bg-white shadow-lg text-center"
          >
            <div className="w-2/12 py-2 px-3">
              {Data.Tanggal_reservasi.substring(10, 0)}
            </div>
            <div className="w-4/12 py-2 px-3">{Data.Nama_dokter}</div>
            <div className="w-4/12 py-2 px-3">{Data.Nama_diagnosa}</div>
            <div className="w-2/12 py-2 px-3">{Data.Nama_Ruangan}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Reservasi;
