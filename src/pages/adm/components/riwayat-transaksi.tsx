import axios from 'axios';
import { useEffect, useState } from 'react';
import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BiEditAlt} from 'react-icons/bi';

const Riwayats = [
    { tanggal: '10-03-2023', nik: '123456789123456', name: 'Richieboy', dokter: 'Andrian'},
    { tanggal: '10-03-2023', nik: '123456789123456', name: 'Richieboy', dokter: 'Andrian'},
    { tanggal: '10-03-2023', nik: '123456789123456', name: 'Richieboy', dokter: 'Andrian'},
    { tanggal: '10-03-2023', nik: '123456789123456', name: 'Richieboy', dokter: 'Andrian'},
    { tanggal: '10-03-2023', nik: '123456789123456', name: 'Richieboy', dokter: 'Andrian'},
    { tanggal: '10-03-2023', nik: '123456789123456', name: 'Richieboy', dokter: 'Andrian'},
    { tanggal: '10-03-2023', nik: '123456789123456', name: 'Richieboy', dokter: 'Andrian'},
    { tanggal: '10-03-2023', nik: '123456789123456', name: 'Richieboy', dokter: 'Andrian'},
    { tanggal: '10-03-2023', nik: '123456789123456', name: 'Richieboy', dokter: 'Andrian'},
  
]

interface RiwayatList{
    Tanggal:string,
    nik_pasien:string,
    nama:string,
    no_telepon:string,
}

function RiwayatTransaksi(){
    const [RList, setRList] = useState<RiwayatList[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const token = localStorage.getItem("token"); // Retrieve the bearer token from local storage
            if (token) {
            const response = await axios.get<RiwayatList>(
                "http://localhost:8888/api/admin/pasien/transaksi",
                {
                headers: {
                    Authorization: `Bearer ${token}`, // Set the Authorization header with the bearer token
                },
                }
            );
            setRList(response.data);
            }
        } catch (error) {
            console.log(error);
        } 
        };

        fetchData();
    }, [RList]);
    return(
        <main className='flex flex-col w-[100%] px-20'>
           <div className="pt-20 text-4xl font-bold">Riwayat <span className="text-green-800">Transaksi</span></div>
           <div className="item-center mt-24 border border-black border-opacity-20 h-[400px] rounded-3xl shadow-lg grid-row-2 overflow-auto">
                <div className="flex flex-row justify-start rounded-3xl h-[10%] mt-3" >
                    <div className="w-[20%] flex items-center justify-center text-center  font-medium text-gray-500 ">Tanggal</div>
                    <div className="w-[20%] flex items-center justify-center text-center  font-medium text-gray-500 ">NIK</div>
                    <div className="w-[20%] flex items-center justify-center text-center  text-ml font-medium text-gray-500">Nama</div>
                    <div className="w-[20%] flex items-center justify-center text-center text-y-center text-ml font-medium text-gray-500">No Telepon</div>
                </div>
                {RList.map((Riwayat, index) => (
                        <div
                            key={index}
                            className='flex flex-row space-x-4 my-2 mx-5 justify-center'
                        >
                            <div className="bg-slate-200 w-full rounded-xl py-2 px-2 flex flex-row">
                                <div className="ml-10 w-[20%] text-sm">{Riwayat.Tanggal.substring(0,10)}</div>
                                <div className="w-[20%]">{Riwayat.nik_pasien}</div>
                                <div className="ml-7 w-[20%]">{Riwayat.nama}</div>
                                <div className="ml-5 w-[20%]">{Riwayat.no_telepon}</div>
                                <div className='ml-auto flex'>
                                    <a href=""><BiEditAlt className='mr-3 text-2xl'></BiEditAlt></a>
                                    <a href=""><AiOutlineInfoCircle className='text-2xl'></AiOutlineInfoCircle></a>
                                </div>
                            </div>
                        </div>
                    ))}    
           </div>
        </main>
    )
}

export default RiwayatTransaksi;