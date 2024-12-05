-- Membuat database jika belum ada
CREATE DATABASE IF NOT EXISTS alaqsyar;

-- Menggunakan database yang telah dibuat
USE alaqsyar;
-- Membuat tabel registration sesuai dengan entitas di NestJS
CREATE TABLE IF NOT EXISTS registration (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomorPendaftaran VARCHAR(255) NOT NULL,
    pilihanUnit VARCHAR(255) NOT NULL,
    siswaBaruAtauPindahan VARCHAR(255) NOT NULL,
    namaLengkap VARCHAR(255) NOT NULL,
    jenisKelamin VARCHAR(50) NOT NULL,
    tempatLahir VARCHAR(255) NOT NULL,
    tanggalLahir DATE NOT NULL,  -- Tanggal lahir sebaiknya menggunakan tipe DATE
    anakKe INT NOT NULL,
    alamat TEXT NOT NULL,  -- Alamat sebaiknya menggunakan tipe TEXT jika panjangnya tidak terduga
    asalSekolah VARCHAR(255) NOT NULL,
    sizeBaju VARCHAR(50) NOT NULL,
    nomorHpCalon VARCHAR(50) NOT NULL,
    namaOrtuWali VARCHAR(255) NOT NULL,
    nomorHpOrtuWali VARCHAR(50) NOT NULL,
    sumberInformasi VARCHAR(255) NOT NULL,
    namaPromotor VARCHAR(255) NOT NULL,
);
