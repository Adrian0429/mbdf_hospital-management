import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BiEditAlt} from 'react-icons/bi';

const Doctors = [
    { id: 'PD001', name: 'Richieboy',  poli: 'Penyakit Dalam', birth: '12-03-2003'},
    { id: 'PD001', name: 'Richieboy',  poli: 'Penyakit Dalam', birth: '12-03-2003'},
    { id: 'PD001', name: 'Richieboy',  poli: 'Penyakit Dalam', birth: '12-03-2003'},
    { id: 'PD001', name: 'Richieboy',  poli: 'Penyakit Dalam', birth: '12-03-2003'},
    { id: 'PD001', name: 'Richieboy',  poli: 'Penyakit Dalam', birth: '12-03-2003'},
    { id: 'PD001', name: 'Richieboy',  poli: 'Penyakit Dalam', birth: '12-03-2003'},
    { id: 'PD001', name: 'Richieboy',  poli: 'Penyakit Dalam', birth: '12-03-2003'},
    { id: 'PD001', name: 'Richieboy',  poli: 'Penyakit Dalam', birth: '12-03-2003'},
    { id: 'PD001', name: 'Richieboy',  poli: 'Penyakit Dalam', birth: '12-03-2003'},
]

function ListDokter(){
    return(
        <main className='flex flex-col w-[100%] px-20'>
           <div className="pt-20 text-4xl font-bold">List <span className="text-green-800">Dokter</span></div>
           <div className="item-center mt-24 border border-black border-opacity-20 h-[400px] rounded-3xl shadow-lg overflow-auto grid-cols-5">
                <div className="flex flex-row justify-start rounded-3xl h-[10%] mt-3" >
                    <div className=" w-[20%] flex items-center justify-center text-center  font-medium text-gray-500 ">ID</div>
                    <div className=" w-[20%] flex items-center justify-center text-center  text-ml font-medium text-gray-500">Nama</div>
                    <div className=" w-[20%] flex items-center justify-center text-center text-ml font-medium text-gray-500">Poli</div>
                    <div className=" w-[20%] flex items-center justify-center text-center text-y-center text-ml font-medium text-gray-500">Tanggal Lahir</div>
                </div>
                {Doctors.map((Doctor, index) => (
                        <div
                            key={index}
                            className='flex flex-row space-x-4 my-2 mx-5 justify-center'
                        >
                            <div className="bg-slate-200 w-full rounded-xl py-2 px-2 flex flex-row grid-cols-5">
                                <div className="ml-14 w-[20%]">{Doctor.id}</div>
                                <div className=" w-[20%]">{Doctor.name}</div>
                                <div className=" w-[20%]">{Doctor.poli}</div>
                                <div className=" ml-3 w-[20%]">{Doctor.birth}</div>
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

export default ListDokter;