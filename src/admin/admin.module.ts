import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { UserService } from '../authentication/user/user.service';  // Import UserService
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [AdminController],
  providers: [UserService, PrismaClient],
})
export class AdminModule {}
