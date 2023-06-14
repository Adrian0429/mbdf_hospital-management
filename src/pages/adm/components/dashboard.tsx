import { useEffect, useState } from "react";
import axios from "axios";

interface UserData {
  nama: string;
  count: number;
}

function Dashboard() {
  const [adminName, setAdminName] = useState<string | undefined>();
  const [count, setCount] = useState<number | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the bearer token from local storage
        if (token) {
          const response = await axios.get<UserData>(
            "http://localhost:8888/api/admin/me",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the bearer token
              },
            }
          );

          setAdminName(response.data.data.nama);
          console.log("sukses dashboard admin");
        }
      } catch (error) {
        console.log(error);
        console.log("? mbuh");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve the bearer token from local storage
        if (token) {
          const response = await axios.get<UserData[]>(
            "http://localhost:8888/api/admin/pasien",
            {
              headers: {
                Authorization: `Bearer ${token}`, // Set the Authorization header with the bearer token
              },
            }
          );

          if (response.data.length > 0) {
            setCount(response.data[0].count);
          }
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
    <main className="flex flex-col w-[100%] px-20">
      <div className="items-start h-max mt-48">
        <h2 className="font-semibold text-5xl">
          Welcome, <span className="text-green-700">{adminName}</span>
        </h2>

        <div className="absolute top-[140px] left-[310px] text-green-700 font-bold text-[350px]">
          {count}
        </div>

        <div className="mt-[320px] text-3xl font-semibold text-gray-700">
          Patient Registered
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
