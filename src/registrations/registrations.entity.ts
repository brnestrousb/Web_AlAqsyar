import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Registration {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomorPendaftaran: string;

  @Column()
  pilihanUnit: string;

  @Column()
  siswaBaruAtauPindahan: string;

  @Column()
  namaLengkap: string;

  @Column()
  jenisKelamin: string;

  @Column()
  tempatLahir: string;

  @Column()
  tanggalLahir: string;

  @Column()
  anakKe: number;

  @Column()
  alamat: string;

  @Column()
  asalSekolah: string;

  @Column()
  sizeBaju: string;

  @Column()
  nomorHpCalon: string;

  @Column()
  namaOrtuWali: string;

  @Column()
  nomorHpOrtuWali: string;

  @Column()
  sumberInformasi: string;

  @Column()
  namaPromotor: string;
}
