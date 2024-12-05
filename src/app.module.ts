import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './common/database.module';
import { RegistrationsModule } from './registrations/registrations.module';
import { Registration } from './registrations/registrations.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mariadb',
      url: process.env.DATABASE_URL,
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT) || 3306,
      username: process.env.DATABASE_USER || 'alaqsyar',
      password: process.env.DATABASE_PASSWORD || 'alaqsyarislamicschool',
      database: process.env.DATABASE_NAME || 'alaqsyar',
      autoLoadEntities: true,
      synchronize: false, // Set to false in production
      entities: [Registration],
    }),
    RegistrationsModule,
    DatabaseModule,
    TypeOrmModule.forFeature([Registration]),
  ],
})
export class AppModule {}
