import Layout from "@/components/layout/Layout";
import Card from "./components/Card";


function Booking(){
    return(
        <Layout>
            <main className="bg-white mt-5 p-5 rounded-2xl shadow-xl">
                <div>
                    <p className="ml-10 my-3 text-2xl font-semibold">Reservasi Jadwal</p>
                    <div className="space-y-5">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Booking;