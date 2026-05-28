import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { beforeEach, describe, it } from 'node:test';
import * as assert from 'node:assert'; // <-- tambah ini
describe('AuthController', () => {
  let controller: AuthController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();
    controller = module.get<AuthController>(AuthController);
  });
  it('should be defined', () => {
    assert.notEqual(controller, undefined); // <-- ganti ini
  });
});
