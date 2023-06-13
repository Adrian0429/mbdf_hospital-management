import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BiEditAlt} from 'react-icons/bi';

const Jadwal = [
    { ruangan:'RD001', dokter: 'Richieboy', hari: 'Senin', jam_masuk:'08', jam_keluar: '12'},
    { ruangan:'RD001', dokter: 'Richieboy', hari: 'Senin', jam_masuk:'08', jam_keluar: '12'},
    { ruangan:'RD001', dokter: 'Richieboy', hari: 'Senin', jam_masuk:'08', jam_keluar: '12'},
    { ruangan:'RD001', dokter: 'Richieboy', hari: 'Senin', jam_masuk:'08', jam_keluar: '12'},
    { ruangan:'RD001', dokter: 'Richieboy', hari: 'Senin', jam_masuk:'08', jam_keluar: '12'},
    { ruangan:'RD001', dokter: 'Richieboy', hari: 'Senin', jam_masuk:'08', jam_keluar: '12'},
    { ruangan:'RD001', dokter: 'Richieboy', hari: 'Senin', jam_masuk:'08', jam_keluar: '12'},
    { ruangan:'RD001', dokter: 'Richieboy', hari: 'Senin', jam_masuk:'08', jam_keluar: '12'},
    { ruangan:'RD001', dokter: 'Richieboy', hari: 'Senin', jam_masuk:'08', jam_keluar: '12'},

]

function JadwalDokter(){
    return(
        <main className='flex flex-col w-[100%] px-20'>
           <div className="pt-20 text-4xl font-bold">Jadwal <span className="text-green-800">Dokter</span></div>
           <div className="item-center mt-24 border border-black border-opacity-20 h-[400px] rounded-3xl shadow-lg grid-row-2 overflow-auto">
                <div className="flex flex-row justify-start rounded-3xl h-[10%] mt-3" >
                    <div className="w-[15%] flex items-center justify-center text-center  font-medium text-gray-500">Dokter</div>
                    <div className="ml-5 w-[15%] flex items-center justify-center text-center  text-ml font-medium text-gray-500">Hari</div>
                    <div className="w-[15%] flex items-center justify-center text-center text-y-center text-ml font-medium text-gray-500">Jam Masuk</div>
                    <div className="w-[20%] flex items-center justify-center text-center text-y-center text-ml font-medium text-gray-500">Jam Keluar</div>
                    <div className="w-[20%] flex items-center justify-center text-center  font-medium text-gray-500">Ruangan</div>
                </div>
                {Jadwal.map((jad, index) => (
                        <div
                            key={index}
                            className='flex flex-row space-x-4 my-2 mx-5 justify-center'
                        >
                            <div className="bg-slate-200 w-full rounded-xl py-2 px-2 flex flex-row">
                                <div className="ml-8 w-[20%]">{jad.dokter}</div>
                                <div className="ml-5 w-[20%]">{jad.hari}</div>
                                <div className="ml-5 w-[20%]">{jad.jam_masuk}</div>
                                <div className="ml-5 w-[20%]">{jad.jam_keluar}</div>
                                <div className="ml-5 w-[20%] text-sm">{jad.ruangan}</div>
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

export default JadwalDokter;