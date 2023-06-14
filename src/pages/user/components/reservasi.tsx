const Data = [
  {
    tanggal: "20-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "21-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "22-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "23-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "24-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "25-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "26-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "20-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "21-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "22-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "23-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "24-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "25-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "26-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "20-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "21-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "22-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "23-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "24-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "25-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "26-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "20-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "21-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "22-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "23-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "24-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "25-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
  {
    tanggal: "26-01-2020",
    dokter: "Dina Sinta",
    diagnosis: "Sirosis Hati",
    ruangan: "R0001",
  },
];

function Reservasi() {
  return (
    <main className="flex flex-col w-[100%] h-full px-20">
      <div className="bg-white w-[90%] max-h-[85vh] rounded-2xl px-5 py-7 overflow-auto mx-auto mt-20">
        <h1 className="ml-6 mb-5 text-3xl font-semibold text-[#404040]">
          Riwayat Reservasi
        </h1>
        <div className="flex flex-row space-x-4 my-2 mx-5 justify-center text-center rounded-xl bg-[#166C4D] mb-4">
          <h6 className="w-2/12 p-2 text-xl font-semibold text-white">
            Tanggal
          </h6>
          <h6 className="w-4/12 p-2 text-xl font-semibold text-white">
            Nama Dokter
          </h6>
          <h6 className="w-4/12 p-2 text-xl font-semibold text-white">
            Diagnosis
          </h6>
          <h6 className="w-2/12 p-2 text-xl font-semibold text-white">
            Ruangan
          </h6>
        </div>
        {Data.map((Data, index) => (
          <div
            key={index}
            className="flex flex-row space-x-4 my-3 mx-5 p-3 justify-center rounded-xl bg-white shadow-lg text-center"
          >
            <div className="w-2/12 py-2 px-3">{Data.tanggal}</div>
            <div className="w-4/12 py-2 px-3">{Data.dokter}</div>
            <div className="w-4/12 py-2 px-3">{Data.diagnosis}</div>
            <div className="w-2/12 py-2 px-3">{Data.ruangan}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Reservasi;
