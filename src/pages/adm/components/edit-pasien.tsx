import InputBox from "@/components/InputBox";
import {AiFillCheckCircle} from 'react-icons/ai'
import {AiFillCloseCircle} from 'react-icons/ai'

function EditPasien({Open, setOpen}){
    function handleClick(name: string){
        setOpen(name);
    }
    return(
        <main className='flex flex-col w-[100%] px-20'>
           <div className="pt-20 text-4xl font-bold mt-4">Edit <span className="text-green-800">Pasien</span></div>
           <div className="w-[600px] item-center mt-8 border border-black border-opacity-20 h-[450px] rounded-3xl shadow-lg grid-row-2">
                <div className="flex flex-col justify-start rounded-3xl h-[10%] mt-3" >
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                        <h1 className="ml-2">Nama</h1>
                        <InputBox className="w-[400px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Nama Dokter'></InputBox>
                    </div>
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                        <h1 className="ml-2">Email</h1>
                        <InputBox className="w-[400px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Email'></InputBox>
                    </div>
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                        <h1 className="ml-2">Password</h1>
                        <InputBox className="w-[400px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Password'></InputBox>
                    </div>
                    <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                        <h1 className="ml-2">No. Telepon</h1>
                        <InputBox className="w-[400px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Nomor Telepon'></InputBox>
                    </div>
                    <div className="mt-8 ml-96 text-green-800">
                        <button className="ml-16" onClick={() => handleClick('list-pasien')}>
                            <AiFillCheckCircle className="text-4xl"></AiFillCheckCircle>
                        </button>
                        <button className="ml-2" onClick={() => handleClick('list-pasien')}>
                            <AiFillCloseCircle className="text-4xl"></AiFillCloseCircle>
                        </button>
                    </div>
                </div>
           </div>
        </main>
    )
}

export default EditPasien;