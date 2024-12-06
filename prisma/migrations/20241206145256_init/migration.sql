-- CreateTable
CREATE TABLE `Registration` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomorPendaftaran` VARCHAR(191) NOT NULL,
    `pilihanUnit` VARCHAR(191) NOT NULL,
    `siswaBaruAtauPindahan` VARCHAR(191) NOT NULL,
    `namaLengkap` VARCHAR(191) NOT NULL,
    `jenisKelamin` VARCHAR(191) NOT NULL,
    `tempatLahir` VARCHAR(191) NOT NULL,
    `tanggalLahir` DATETIME(3) NOT NULL,
    `anakKe` INTEGER NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `asalSekolah` VARCHAR(191) NOT NULL,
    `sizeBaju` VARCHAR(191) NOT NULL,
    `nomorHpCalon` VARCHAR(191) NOT NULL,
    `namaOrtuWali` VARCHAR(191) NOT NULL,
    `nomorHpOrtuWali` VARCHAR(191) NOT NULL,
    `sumberInformasi` VARCHAR(191) NOT NULL,
    `namaPromotor` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
