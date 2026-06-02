import { Injectable } from '@nestjs/common';

import { PassportStrategy } from '@nestjs/passport';

import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'rahasiajwt', // <-- Tulis teks bebas di sini sebagai kunci rahasia
    });
  }

 async validate(payload: any) {
  console.log("JWT MASUK:", payload)

  return {
    id: payload.sub,
    email: payload.email,
    role: payload.role,
  };
}
}