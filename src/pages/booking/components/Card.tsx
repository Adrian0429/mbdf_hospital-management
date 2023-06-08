import ButtonLink from "@/components/ButtonLink";

function Card() {
    return(
        <div className="flex h-64 mx-7">
            <div className="bg-[#DEDEDE] w-full rounded-2xl text-right pr-72 flex flex-col justify-center">
                <h1 className="text-4xl font-bold text-[#5B5B5B] opacity-50">Nama Doktor</h1>
                <p className="text-2xl font-bold text-[#5B5B5B] opacity-50">Session : XX.00 - XX.00</p>
                <p className="text-2xl font-bold text-[#5B5B5B] opacity-50">Male</p>
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
                    <p className="absolute bottom-4 left-12 text-2xl text-white font-bold">Rp. 500.0000</p>
                </div>
            </div>
        </div>
    )
}
export default Card;