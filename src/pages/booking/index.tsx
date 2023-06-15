import Layout from "@/components/layout/Layout";
import Card from "./components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

interface sesiType{
    nama_dokter:string,
    jam_masuk:number,
    jam_keluar:number,
    jenis_kelamin:string,
    harga_Konsul:string,
}

function Booking(){
    const [JDokter, setJDokter] = useState<sesiType[]>([]);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const token = localStorage.getItem("token"); // Retrieve the bearer token from local storage
            if (token) {
            const response = await axios.get<sesiType>(
                "http://localhost:8888/api/pasien/jadwalDokter",
                {
                headers: {
                    Authorization: `Bearer ${token}`, // Set the Authorization header with the bearer token
                },
                }
            );
            console.log(response.data);
            setJDokter(response.data);
            console.log("00"+ JDokter);
            }
        } catch (error) {
            console.log(error);
        } 
        };

        fetchData();
    }, [JDokter]);
    return(
        <Layout>
            <main className="bg-white mt-5 p-5 rounded-2xl shadow-xl">
                <div>
                    <p className="ml-10 my-3 text-2xl font-semibold">Reservasi Jadwal</p>
                    <div className="space-y-5">
                    {JDokter.map((jad, index) => (
                        <Card key={index} nama={jad.nama_dokter} jam_mulai={jad.jam_masuk} jam_keluar={jad.jam_keluar} jenis_kelamin={jad.jenis_kelamin} harga_konsul={jad.harga_Konsul}/>
                    ))  
                    }
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Booking;