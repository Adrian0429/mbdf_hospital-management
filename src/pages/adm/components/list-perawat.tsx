import {TiPencil} from 'react-icons/ti'
import {AiFillPlusCircle} from 'react-icons/ai'

import {AiOutlineInfoCircle} from 'react-icons/ai';
import {BiEditAlt} from 'react-icons/bi';


const Perawats = [
    { id: 'P001', name: 'Richieboy', birth: '12-03-2003'},
    { id: 'P001', name: 'Richieboy', birth: '12-03-2003'},
    { id: 'P001', name: 'Richieboy', birth: '12-03-2003'},
    { id: 'P001', name: 'Richieboy', birth: '12-03-2003'},
    { id: 'P001', name: 'Richieboy', birth: '12-03-2003'},
    { id: 'P001', name: 'Richieboy', birth: '12-03-2003'},
    { id: 'P001', name: 'Richieboy', birth: '12-03-2003'},
    { id: 'P001', name: 'Richieboy', birth: '12-03-2003'},
    { id: 'P001', name: 'Richieboy', birth: '12-03-2003'},
    { id: 'P001', name: 'Richieboy', birth: '12-03-2003'},
]

function ListPerawat({ Open, setOpen }){
    function handleClick(name: string){
        setOpen(name);
    }
    return(
        <main className='flex flex-col w-[100%] px-20'>
           <div className="pt-20 text-4xl font-bold">List <span className="text-green-800">Perawat</span></div>
           <div className='flex justify-end'>
                <button onClick={()=>handleClick('tambah-perawat')}>
                    <AiFillPlusCircle className='mt-10 mr-8 mb-5 text-4xl text-green-800'></AiFillPlusCircle>
                </button>
           </div>
           <div className="item-center border border-black border-opacity-20 h-[400px] rounded-3xl shadow-lg grid-row-2 overflow-auto">
                <div className="flex flex-row justify-start rounded-3xl h-[10%] mt-3" >
                    <div className="w-[20%] flex items-center justify-center text-center  font-medium text-gray-500 ">ID</div>
                    <div className="w-[20%] flex items-center justify-center text-center  text-ml font-medium text-gray-500">Nama</div>
                    <div className="w-[20%] flex items-center justify-center text-center text-y-center text-ml font-medium text-gray-500">Tanggal Lahir</div>
                </div>
                {Perawats.map((Perawat, index) => (
                        <div
                            key={index}
                            className='flex flex-row space-x-4 my-2 mx-5 justify-center'
                        >
                            <div className="bg-slate-200 w-full rounded-xl py-2 px-2 flex flex-row">
                                <div className="ml-14 w-[20%]">{Perawat.id}</div>
                                <div className="w-[20%]">{Perawat.name}</div>
                                <div className="w-[20%]">{Perawat.birth}</div>
                                <button onClick={() => handleClick('edit-perawat')} className='ml-96'>
                                    <TiPencil className='ml-36'></TiPencil>
                                </button>
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

export default ListPerawat;