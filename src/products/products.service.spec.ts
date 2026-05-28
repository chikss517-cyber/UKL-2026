import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { beforeEach, describe, it } from 'node:test';
describe('ProductsService', () => {
  let service: ProductsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService],
    }).compile();
    service = module.get<ProductsService>(ProductsService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function expect(_service: ProductsService) {
  throw new Error('Function not implemented.');
}
