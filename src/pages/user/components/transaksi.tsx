import axios from "axios";
import { useEffect, useState } from "react";

interface TransaksiObat {
  Tanggal: string;
  nama_obat: string;
}

function Transaksi() {
  const [Obats, setObats] = useState<TransaksiObat[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const NIK = localStorage.getItem("nik");
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get<TransaksiObat[]>(
            `http://localhost:8888/api/pasien/PembelianObat/${NIK}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setObats(response.data);
          console.log(Obats);
        }
      } catch (error) {
        console.error("Error fetching OBATT:", error);
      }
    };
    fetchData();
  }, [Obats]);

  return (
    <main className="flex flex-col w-[100%] h-full px-20">
      <div className="bg-white w-[90%] max-h-[85vh] rounded-2xl px-5 py-7 overflow-auto mx-auto mt-20">
        <h1 className="ml-6 mb-5 text-3xl font-semibold text-[#404040]">
          Riwayat Transaksi
        </h1>
        <div className="flex flex-row space-x-4 my-2 mx-5 justify-center text-center rounded-xl bg-[#166C4D] mb-4">
          <h6 className="w-3/12 p-2 text-xl font-semibold text-white">
            Tanggal
          </h6>
          <h6 className="w-6/12 p-2 text-xl font-semibold text-white">
            Nama Obat
          </h6>
        </div>
        {Obats.map((Data, index) => (
          <div
            key={index}
            className="flex flex-row space-x-4 my-3 mx-5 p-3 justify-center rounded-xl bg-white shadow-lg text-center"
          >
            <div className="w-3/12 py-2 px-3">
              {Data.Tanggal.substring(0, 10)}
            </div>
            <div className="w-6/12 py-2 px-3">{Data.nama_obat}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Transaksi;
