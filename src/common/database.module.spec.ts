import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseModule } from './database.module';
import { DataSource } from 'typeorm';

describe('DatabaseModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [DatabaseModule],
    }).compile();
  });

  afterAll(async () => {
    // Di sini Anda bisa menutup koneksi atau membersihkan database jika diperlukan
    // Contoh jika menggunakan TypeORM:
    const connection = module.get(DataSource); // Ambil koneksi dari modul
    await connection.destroy(); // Menutup koneksi
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });
});
