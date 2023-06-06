// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type UserType = {
  NIK_Pasien: string;
  Nama_Pasien: string;
  Email: string;
  Jenis_Kelamin: String;
  Tanggal_Lahir: Date;
  No_Telp:String;
  Password:String;
  Tanggal_Daftar:Date;   
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserType[]>
) {
    if(req.method === 'GET'){
    const users = await prisma.user.findMany({
    select: {
      NIK_Pasien: true,
      Nama_Pasien: true,
      Email: true,
      Jenis_Kelamin: true,
      Tanggal_Lahir: true,
      No_Telp: true,
      Password: true,
      Tanggal_Daftar: true,
    },
  });
  console.log(users)
  res.status(200).json(users)
    }else{
        res.status(405).json
    }

}
