-- CreateTable
CREATE TABLE "User" (
    "NIK_Pasien" TEXT NOT NULL,
    "Nama_Pasien" TEXT NOT NULL,
    "Jenis_Kelamin" TEXT NOT NULL,
    "Tanggal_Lahir" TIMESTAMP(3) NOT NULL,
    "No_Telp" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Tanggal_Daftar" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("NIK_Pasien")
);

-- CreateTable
CREATE TABLE "Transaksi" (
    "Id_Transaksi" SERIAL NOT NULL,
    "Tanggal_Transaksi" TIMESTAMP(3) NOT NULL,
    "Harga" TEXT NOT NULL,
    "userNIK_Pasien" TEXT,

    CONSTRAINT "Transaksi_pkey" PRIMARY KEY ("Id_Transaksi")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_NIK_Pasien_key" ON "User"("NIK_Pasien");

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");

-- AddForeignKey
ALTER TABLE "Transaksi" ADD CONSTRAINT "Transaksi_userNIK_Pasien_fkey" FOREIGN KEY ("userNIK_Pasien") REFERENCES "User"("NIK_Pasien") ON DELETE SET NULL ON UPDATE CASCADE;
