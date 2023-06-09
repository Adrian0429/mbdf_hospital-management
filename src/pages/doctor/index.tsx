import Layout from "@/components/layout/Layout";
import Image from "next/image";

const Doctors = [
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam'},
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam'},
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam'},
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam'},
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
    { name: 'Ratna Sari', speciality: 'Penyakit Dalam' },
];
  

function Doctor(){
    return(
        <Layout>
            <main className="flex h-max mx-7 my-6">
                <div className="bg-[#156C6D] w-full h-max rounded-3xl text-left pl-8 pt-8">
                    <h1 className="ml-7 text-2xl font-bold text-white">Temukan doktormu</h1>
                    <Image src={"./doc1.svg"} alt={"Doctor Photo"} width={250} height={200} className="ml-10"/>
                    <Image src={"./doc2.svg"} alt={"Doctor Photo"} width={250} height={200} className="ml-10"/>
                </div>
                <div className="relative">
                    <div className="bg-white w-[100vh] h-[calc(96vh+1px)] rounded-2xl absolute right-0 py-5 px-5 overflow-auto">
                    {Doctors.map((Doctor, index) => (
                        <div
                            key={index}
                            className='flex flex-row space-x-4 my-2 mx-5 justify-center'
                        >
                            <div className="bg-[#DEDEDE] w-3/5 rounded-xl py-2 px-2">{Doctor.name}</div>
                            <div className="bg-[#DEDEDE] w-2/4 rounded-xl py-2 px-2">{Doctor.speciality}</div>
                        </div>
                    ))}    
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Doctor;