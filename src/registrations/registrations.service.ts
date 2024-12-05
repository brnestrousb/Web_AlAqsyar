import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Registration } from './registrations.entity';

@Injectable()
export class RegistrationsService {
  constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>,
  ) {}

  findAll(): Promise<Registration[]> {
    return this.registrationRepository.find();
  }

  create(data: Partial<Registration>): Promise<Registration> {
    const newRegistration = this.registrationRepository.create(data);
    return this.registrationRepository.save(newRegistration);
  }
}
