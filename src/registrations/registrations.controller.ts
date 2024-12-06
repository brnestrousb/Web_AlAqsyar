import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { Registration } from './registrations.entity';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('registrations')
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post()
  async create(@Body() body: Promise<Registration>): Promise<Registration> {
    return await this.registrationsService.createRegistration(body);
  }

  @Get()
  async findAll(): Promise<Registration[]> {
    return await prisma.registration.findMany();
  }

  @Get()
  async findOne(@Param('id') id: number ): Promise<Registration> {
    return await prisma.registration.findUnique({ where: { id } });
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: Partial<Registration>): Promise<Registration> {
    return await prisma.registration.update({where: { id }, data: body });
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<Registration> {
    return await prisma.registration.delete({ where: { id } });
  }
}
