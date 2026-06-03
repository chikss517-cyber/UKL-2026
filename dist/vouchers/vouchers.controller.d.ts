import { VouchersService } from './vouchers.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { ApplyVoucherDto } from './dto/apply-voucher.dto';
export declare class VouchersController {
    private readonly vouchersService;
    constructor(vouchersService: VouchersService);
    create(data: CreateVoucherDto): Promise<any>;
    findAll(): Promise<any>;
    apply(data: ApplyVoucherDto): Promise<{
        voucher: any;
        type: any;
        value: any;
        finalTotal: number;
    }>;
    remove(id: string): Promise<any>;
}
