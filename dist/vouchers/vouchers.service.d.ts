import { PrismaService } from '../prisma/prisma.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { ApplyVoucherDto } from './dto/apply-voucher.dto';
export declare class VouchersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(data: CreateVoucherDto): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: number): Promise<any>;
    apply(data: ApplyVoucherDto): Promise<{
        voucher: any;
        type: any;
        value: any;
        finalTotal: number;
    }>;
    remove(id: number): Promise<any>;
}
