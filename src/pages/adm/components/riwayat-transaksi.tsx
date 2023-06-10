
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

function RiwayatTransaksi(){
    return(
        <main className='flex flex-col w-[100%] px-20'>
           <div className="pt-20 text-4xl font-bold">List <span className="text-green-800">Pasien</span></div>
           <div className="item-center mt-24 border border-black border-opacity-20 h-[400px] rounded-3xl shadow-lg grid-row-2 overflow-auto">
                <div className="flex flex-row justify-start rounded-3xl h-[10%] mt-3" >
                    <div className=" flex items-center justify-center text-center ml-16  font-medium text-gray-500 ">Tanggal</div>
                    <div className=" flex items-center justify-center text-center ml-20  font-medium text-gray-500 ">NIK</div>
                    <div className=" flex items-center justify-center text-center ml-32  text-ml font-medium text-gray-500">Nama</div>
                    <div className=" flex items-center justify-center text-center ml-32 text-y-center text-ml font-medium text-gray-500">Tanggal Lahir</div>
                </div>
                {Riwayats.map((Riwayat, index) => (
                        <div
                            key={index}
                            className='flex flex-row space-x-4 my-2 mx-5 justify-center'
                        >
                            <div className="bg-slate-200 w-full rounded-xl py-2 px-2 flex flex-row">
                                <div className="pl-5 text-sm">{Riwayat.tanggal}</div>
                                <div className="pl-5 ml-5">{Riwayat.nik}</div>
                                <div className="pl-5 ml-5">{Riwayat.name}</div>
                                <div className="pl-5 ml-24">{Riwayat.dokter}</div>
                            </div>
                        </div>
                    ))}    
           </div>
        </main>
    )
}

export default RiwayatTransaksi;