import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LoginUserDto } from '../user/dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto.email, createUserDto.password);
  }

  @Post('signin')
  async signIn(@Body() loginUserDto: LoginUserDto) {
    return this.authService.signIn(loginUserDto.email, loginUserDto.password);
  }
}
