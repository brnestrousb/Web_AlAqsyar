import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registration } from '../registrations/registrations.entity';
import { ConfigModule } from '@nestjs/config';
import { RegistrationsModule } from '../registrations/registrations.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      url: process.env.DATABASE_URL,
      host: process.env.DATABASE_HOST,  // Ganti dengan alamat PostgreSQL Anda jika di server
      port: 3306,  // Port default PostgreSQL
      username: process.env.DATABASE_USERNAME,  // Ganti dengan username PostgreSQL Anda
      password: process.env.DATABASE_PASSWORD,  // Ganti dengan password PostgreSQL Anda
      database: process.env.DATABASE_NAME,  // Ganti dengan nama database yang Anda gunakan
      entities: [Registration],
      synchronize: false,  // Jangan aktifkan di produksi! Hanya untuk pengembangan.
    }),
    TypeOrmModule.forFeature([Registration]),
    RegistrationsModule,
    DatabaseModule,
  ],
})
export class DatabaseModule {}
