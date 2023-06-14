import { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
  nama: string;
  nik_pasien: string;
  jenis_kelamin: string;
  tanggal_lahir: string;
  no_telepon: string;
}

function Profil() {
  const [user, setUser] = useState<UserData>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the bearer token from local storage
        if (token) {
          const response = await axios.get<UserData>(
            "http://localhost:8888/api/pasien/me",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the bearer token
              },
            }
          );

          setUser(response.data.data);
          console.log("sukses harusnya");
        }
      } catch (error) {
        console.log(error);
        console.log("? mbuh");
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col w-[100%] h-full px-20">
      <div className="bg-white w-[90%] max-h-[90vh] rounded-2xl px-5 py-7 overflow-auto mx-auto mt-20">
        <h1 className="ml-7 mb-5 text-4xl font-semibold text-[#404040]">
          Profil
        </h1>
        <div className="flex flex-col space-y-5 my-3 mx-5 p-3 justify-center rounded-xltext-center">
          <p className="text-left text-2xl font-semibold text-[#166C4D]">NIK</p>
          <div className="py-2 px-3 bg-[#404040] text-[#404040] rounded-xl bg-opacity-10 text-left text-xl font-semibold">
            {user?.nik_pasien}
          </div>
          <p className="text-left text-2xl font-semibold text-[#166C4D]">
            Nama
          </p>
          <div className="py-2 px-3 bg-[#404040] text-[#404040] rounded-xl bg-opacity-10 text-left text-xl font-semibold">
            {user?.nama}
          </div>
          <p className="text-left text-2xl font-semibold text-[#166C4D]">
            Jenis Kelamin
          </p>
          <div className="py-2 px-3 bg-[#404040] text-[#404040] rounded-xl bg-opacity-10 text-left text-xl font-semibold">
            {user?.jenis_kelamin}
          </div>
          <p className="text-left text-2xl font-semibold text-[#166C4D]">
            Tanggal Lahir
          </p>
          <div className="py-2 px-3 bg-[#404040] text-[#404040] rounded-xl bg-opacity-10 text-left text-xl font-semibold">
            {user?.tanggal_lahir}
          </div>
          <p className="text-left text-2xl font-semibold text-[#166C4D]">
            Nomor Telepon
          </p>
          <div className="py-2 px-3 bg-[#404040] text-[#404040] rounded-xl bg-opacity-10 text-left text-xl font-semibold">
            {user?.no_telepon}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profil;
