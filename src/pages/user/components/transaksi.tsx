
const Data = [
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'4'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'3'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'4'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'3'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'20'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'4'},
    {tanggal: '20-01-2020', obat:'Paracetamol', jumlah:'3'},
]

function Transaksi(){
    return(
        <main className='flex flex-col w-[100%] h-full px-20'>
            <div className="bg-white w-[90%] max-h-[85vh] rounded-2xl px-5 py-7 overflow-auto mx-auto mt-20">
                <h1 className="ml-6 mb-5 text-3xl font-semibold text-[#404040]">Riwayat Transaksi</h1>
                <div className='flex flex-row space-x-4 my-2 mx-5 justify-center text-center rounded-xl bg-[#166C4D] mb-4'>
                    <h6 className="w-3/12 p-2 text-xl font-semibold text-white">Tanggal</h6>
                    <h6 className="w-6/12 p-2 text-xl font-semibold text-white">Nama Obat</h6>
                    <h6 className="w-3/12 p-2 text-xl font-semibold text-white">Jumlah</h6>
                </div>
                {Data.map((Data, index) => (
                    <div
                        key={index}
                        className='flex flex-row space-x-4 my-3 mx-5 p-3 justify-center rounded-xl bg-white shadow-lg text-center'
                    >
                        <div className="w-3/12 py-2 px-3">{Data.tanggal}</div>
                        <div className="w-6/12 py-2 px-3">{Data.obat}</div>
                        <div className="w-3/12 py-2 px-3">{Data.jumlah}</div>
                    </div>
                ))}    
            </div>
        </main>
    )
}

export default Transaksi;