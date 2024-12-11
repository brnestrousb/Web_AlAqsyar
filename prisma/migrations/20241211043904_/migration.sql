-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "nomorPendaftaran" TEXT NOT NULL,
    "pilihanUnit" TEXT NOT NULL,
    "siswaBaruAtauPindahan" TEXT NOT NULL,
    "namaLengkap" TEXT NOT NULL,
    "jenisKelamin" TEXT NOT NULL,
    "tempatLahir" TEXT NOT NULL,
    "tanggalLahir" TIMESTAMP(3) NOT NULL,
    "anakKe" INTEGER NOT NULL,
    "alamat" TEXT NOT NULL,
    "asalSekolah" TEXT NOT NULL,
    "sizeBaju" TEXT NOT NULL,
    "nomorHpCalon" TEXT NOT NULL,
    "namaOrtuWali" TEXT NOT NULL,
    "nomorHpOrtuWali" TEXT NOT NULL,
    "sumberInformasi" TEXT NOT NULL,
    "namaPromotor" TEXT NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);
