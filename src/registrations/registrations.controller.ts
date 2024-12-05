import { Controller, Get, Post, Body } from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { Registration } from './registrations.entity';

@Controller('registrations')
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Get()
  getAll(): Promise<Registration[]> {
    return this.registrationsService.findAll();
  }

  @Post()
  create(@Body() body: Partial<Registration>): Promise<Registration> {
    return this.registrationsService.create(body);
  }
}
