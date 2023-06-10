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

function ListPerawat(){
    return(
        <main className='flex flex-col w-[100%] px-20'>
           <div className="pt-20 text-4xl font-bold">List <span className="text-green-800">Perawat</span></div>
           <div className="item-center mt-24 border border-black border-opacity-20 h-[400px] rounded-3xl shadow-lg grid-row-2 overflow-auto">
                <div className="flex flex-row justify-start rounded-3xl h-[10%] mt-3" >
                    <div className=" flex items-center justify-center text-center ml-16  font-medium text-gray-500 ">ID</div>
                    <div className=" flex items-center justify-center text-center ml-32  text-ml font-medium text-gray-500">Nama</div>
                    <div className=" flex items-center justify-center text-center ml-32 text-y-center text-ml font-medium text-gray-500">Tanggal Lahir</div>
                </div>
                {Perawats.map((Perawat, index) => (
                        <div
                            key={index}
                            className='flex flex-row space-x-4 my-2 mx-5 justify-center'
                        >
                            <div className="bg-slate-200 w-full rounded-xl py-2 px-2 flex flex-row">
                                <div className="pl-5">{Perawat.id}</div>
                                <div className="pl-5 ml-24">{Perawat.name}</div>
                                <div className="pl-5 ml-24">{Perawat.birth}</div>
                            </div>
                        </div>
                    ))}    
           </div>
        </main>
    )
}

export default ListPerawat;