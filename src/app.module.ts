import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { parse } from 'pg-connection-string';
import { UserModule } from './authentication/user/user.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    UserModule,
    AdminModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const databaseUrl = configService.get<string>('DATABASE_URL');
        const dbConfig = parse(databaseUrl);

        return {
          type: 'postgres',
          host: dbConfig.host,
          port: parseInt(dbConfig.port || '5432', 10),
          username: dbConfig.user,
          password: dbConfig.password,
          database: dbConfig.database,
          autoLoadEntities: true,
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
