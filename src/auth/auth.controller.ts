import { Controller, Post, Body, UseGuards, Req, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';
import { AuthenticatedGuard } from './authenticated.guard';

@Controller('auth')
export class AuthController {
  constructor(private authServices: AuthService) {}

  @Post('signup')
  signup(@Body('email') email, @Body('password') password) {
    return this.authServices.signup(email, password);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req) {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get()
  profile(@Req() req) {
    return req.user;
  }
}
