import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    const { NIK_Pasien, Nama_Pasien, Jenis_Kelamin, Tanggal_Lahir, No_Telp, Email, Password } = req.body;

    const newUser = await prisma.user.create({
      data: {
        NIK_Pasien,
        Nama_Pasien,
        Jenis_Kelamin,
        Tanggal_Lahir: new Date(Tanggal_Lahir),
        No_Telp,
        Email,
        Password,
      },
    });
    console.log(newUser)
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}
