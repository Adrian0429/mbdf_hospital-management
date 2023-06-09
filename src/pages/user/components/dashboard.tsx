import {AiOutlineBook, AiOutlineSearch} from 'react-icons/ai'
import {BiUserCircle} from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs';

function Dashboard(){
    return(
        <main className='flex flex-col w-[100%] px-20'>
            <div className='flex flex-row justify-between items-center h-max mt-14'>
                <h2 className='font-semibold text-3xl'>Welcome, <span className='text-green-800'>Andrian</span></h2>
                <div className="py-4 flex justify-end pr-10 rounded-full w-[20%] text-right">
                    <BiUserCircle className='text-5xl text-green-800'></BiUserCircle>
                </div>
            </div>
            <div className='mt-10'>
                <div className='rounded-lg h-full w-2/4 flex flex-row space-x-5'>
                    <button className='bg-white w-full py-5 flex flex-row space-x-10 items-center justify-center drop-shadow-xl rounded-xl'>
                        <AiOutlineBook className='text-5xl text-green-800' />
                        <div className='text-left'>
                            <h2 className='text-2xl font-semibold text-[#404040]'>Reservasi</h2>
                            <p className='text-[#404040]'>Riwayat</p>
                        </div>
                    </button>
                    <button className='bg-white w-full py-5 flex flex-row space-x-10 items-center justify-center drop-shadow-xl rounded-xl'>
                        <BsCart2 className='text-5xl text-green-800' />
                        <div className='text-left'>
                            <h2 className='text-2xl font-semibold text-[#404040]'>Pembelian</h2>
                            <p className='text-[#404040]'>Obat</p>
                        </div>
                    </button>
                </div>
            </div>
        </main>
    )
}

export default Dashboard;