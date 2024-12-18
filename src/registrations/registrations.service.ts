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

  async createRegistration(data: Promise<Registration>) {
    const registration = await this.createRegistration(data);
    return await registration;
  }

  async getAllRegistrations(): Promise<Registration[]> {
    const registrations = await this.getAllRegistrations();
    return await this.getAllRegistrations();
  }

  async getRegistrationById(id: BigInt): Promise<Registration> {
    if (!id || typeof id !== 'bigint') {
      throw new Error('ID is required');
    }
    return await this.getRegistrationById(id)
  }

  async updateRegistration(id: BigInt, data: any) {
    if (!id || typeof id !== 'bigint' && data === null || data === undefined) {
      throw new Error('ID is required');
    }
    return await this.updateRegistration(id, data);
  }
  async deleteRegistration(id: BigInt) {
    if (!id || typeof id !== 'number') {
      throw new Error('ID is required');
    }
    return await this.deleteRegistration(id);
  }
}
