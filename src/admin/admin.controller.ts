import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../authentication/user/user.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly userService: UserService) {}

  // Endpoint sementara untuk membuat akun admin
  @Post('create')
  async createAdmin(@Body() body: { email: string; password: string }) {
    return this.userService.createAdmin(body.email, body.password);
  }
}
