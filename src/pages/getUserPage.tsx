// pages/index.tsx
import Button from "@/components/Button";
import WhiteButton from "@/components/WhiteButton";
import Link from "next/link";
import { useState, useEffect } from "react";

type UserType = {
  NIK_Pasien: string;
  Nama_Pasien: string;
  Email: string;
  Jenis_Kelamin: String;
  Tanggal_Lahir: Date;
  No_Telp: String;
  Password: String;
  Tanggal_Daftar: Date;
};

const GetUserPage = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    fetch("/api/GetUsers")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100 border-2 border-black ">
      <div className="flex w-full border-2">
        <h1>List of Users</h1>
        {users.map((user) => (
          <li key={user.NIK_Pasien}>
            <div className="bg-blue-100 rounded-sm border-2 my-2">
              <h2>nama: {user.Nama_Pasien}</h2>
              <h2>email: {user.Email}</h2>
              <h2>Jenis Kelamin: {user.Jenis_Kelamin}</h2>
              <h2>Nomor Telepon: {user.No_Telp}</h2>
              <h2>Password: {user.Password}</h2>
            </div>
          </li>
        ))}
      </div>

      <Button href="/register/register"> go to regis</Button>
      <WhiteButton title="hellow" url="/" />
    </div>
  );
};

export default GetUserPage;
