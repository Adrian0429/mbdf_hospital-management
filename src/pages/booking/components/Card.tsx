import ButtonLink from "@/components/ButtonLink";

interface sesiType{
    nama:string,
    jam_mulai:number,
    jam_keluar:number,
    jenis_kelamin:string,
    harga_konsul:string,
}

function Card(
{    nama,
    jam_mulai,
    jam_keluar,
    jenis_kelamin,
    harga_konsul}: sesiType
) {
    return(
        <div className="flex h-64 mx-7">
            <div className="bg-[#DEDEDE] w-full rounded-2xl text-right pr-72 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-[#5B5B5B] opacity-50">{nama}</h1>
                <p className="text-2xl font-bold text-[#5B5B5B] opacity-50">Session : {jam_mulai}.00 - {jam_keluar}.00</p>
                <p className="text-2xl font-bold text-[#5B5B5B] opacity-50">{jenis_kelamin}</p>
                <a href="/">
                    <button
                        className="bg-[#156C6D] text-xl text-white px-5 py-3 rounded-xl mt-5"
                    >
                        Reservasi Sekarang
                    </button>
                </a>
            </div>
            <div className="relative">
                <div className="bg-[#156C6D] w-64 h-64 rounded-2xl absolute right-0">
                    <p className="absolute bottom-4 left-12 text-2xl text-white font-bold">Rp. {harga_konsul.substring(1)}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;