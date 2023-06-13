const Count = [
    { count: '80'}
]

function Dashboard(){
    return(
        <main className='flex flex-col w-[100%] px-20'>
            <div className='items-start h-max mt-48'>
                <h2 className='font-semibold text-5xl'>Welcome, <span className='text-green-700'>Andrian</span></h2>
                
                {Count.map((total) => (
                        <div className="absolute top-[140px] left-[310px] text-green-700 font-bold text-[350px]">{total.count}</div>
                    ))}
                <div className='mt-[320px] text-3xl font-semibold text-gray-700'>Patient Registered</div>
            </div>
           
        </main>
    )
}

export default Dashboard;