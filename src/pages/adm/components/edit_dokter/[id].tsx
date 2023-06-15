import {AiFillCheckCircle} from 'react-icons/ai'
import Input from "../input";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";

function EditDokters(){
    const router = useRouter();
    const { id } = router.query;
    const methods = useForm();
    
    const { handleSubmit } = methods;
    const onSubmit = async (data: any) => {
        console.log(data.Nama_Dokter);
        const token = localStorage.getItem("token");
        try {
        const response = await fetch(`http://localhost:8888/api/admin/dokter/new`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
            ID_Dokter: id,
            nama_dokter: data.Nama_Dokter,
            no_telepon: data.No_Telepon,
            harga_Konsul: data.Harga_Konsultasi,
                }),
            });
            } catch (error) {
                console.log(error);
            }
        }

    return(
        <main className='flex flex-col w-[100%] px-20'>
           <div className="pt-20 text-4xl font-bold mt-12">Edit <span className="text-green-800">Dokter</span></div>
           <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="w-[600px] item-center mt-8 border border-black border-opacity-20 h-[380px] rounded-3xl shadow-lg grid-row-2">
                    <div className="flex flex-col justify-start rounded-3xl h-[10%] mt-3" >
                        <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                            <h1 className="ml-2">Nama</h1>
                            <Input className="w-[400px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Nama Dokter' id="Nama_Dokter" type="text"></Input>
                        </div>
                        <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                            <h1 className="ml-2">No. Telepon</h1>
                            <Input className="w-[400px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='No Telepon' id="No_telp" type="text"></Input>
                        </div>
                        <div className="text-[#404040] text-xl font-bold tracking-tight leading-none ml-8 mr-8 mt-3 flex flex-col">
                            <h1 className="ml-2">Harga Konsultasi</h1>
                            <Input className="w-[400px] border border-[#DEDEDE] mt-3 bg-[#F3F3F3] text-black" placeholder='Harga Konsultasi' id="Harga_Konsul" type="text"></Input>
                        </div>
                        <div className="mt-12 ml-96 text-green-800">
                            <button className="ml-16" type="submit">
                                <AiFillCheckCircle className="text-4xl"></AiFillCheckCircle>
                            </button>
                        </div>
                    </div>
                </div>
           </form>
        </FormProvider>
        </main>
    )
}

export default EditDokters;