import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,

    private readonly jwtService: JwtService,
  ) {}

  async register(data: RegisterDto) {
    const userExist = (await this.usersService.findByEmail(data.email)) as any;

    if (userExist) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = this.usersService.create({
      ...data,
      password: hashedPassword,
    });

    return {
      message: 'Register success',
      user,
    };
  }

  async login(data: LoginDto) {
    const user = (await this.usersService.findByEmail(data.email)) as any;

    if (!user) {
      throw new UnauthorizedException('Email not found');
    }

    const validPassword = await bcrypt.compare(data.password, user.password);
    if (!validPassword) {
      throw new UnauthorizedException('Wrong password');
    }
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
