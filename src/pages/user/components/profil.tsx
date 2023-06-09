
// nik pasien
// nama
// kelamin
// tgl lahir
// email
// no telp

const Data = {
    nik: '3511411109092003',
    nama: 'John Doe',
    jenis_kelamin: 'Laki-laki',
    tgl_lahir: '09-09-2003',
    no_telp: '081190908765'

}

function Profil(){
    return(
        <main className='flex flex-col w-[100%] h-full px-20'>
            <div className="bg-white w-[90%] max-h-[90vh] rounded-2xl px-5 py-7 overflow-auto mx-auto mt-20">
                <h1 className="ml-7 mb-5 text-4xl font-semibold text-[#404040]">Profil</h1>
                <div
                    className='flex flex-col space-y-5 my-3 mx-5 p-3 justify-center rounded-xltext-center'
                >
                    <p className="text-left text-2xl font-semibold text-[#166C4D]">NIK</p>
                    <div className="py-2 px-3 bg-[#404040] text-[#404040] rounded-xl bg-opacity-10 text-left text-xl font-semibold">{Data.nik}</div>
                    <p className="text-left text-2xl font-semibold text-[#166C4D]">Nama</p>
                    <div className="py-2 px-3 bg-[#404040] text-[#404040] rounded-xl bg-opacity-10 text-left text-xl font-semibold">{Data.nama}</div>
                    <p className="text-left text-2xl font-semibold text-[#166C4D]">Jenis Kelamin</p>
                    <div className="py-2 px-3 bg-[#404040] text-[#404040] rounded-xl bg-opacity-10 text-left text-xl font-semibold">{Data.jenis_kelamin}</div>
                    <p className="text-left text-2xl font-semibold text-[#166C4D]">Tanggal Lahir</p>
                    <div className="py-2 px-3 bg-[#404040] text-[#404040] rounded-xl bg-opacity-10 text-left text-xl font-semibold">{Data.tgl_lahir}</div>
                    <p className="text-left text-2xl font-semibold text-[#166C4D]">Nomor Telepon</p>
                    <div className="py-2 px-3 bg-[#404040] text-[#404040] rounded-xl bg-opacity-10 text-left text-xl font-semibold">{Data.no_telp}</div>
                </div>
            </div>
        </main>
    )
}

export default Profil;