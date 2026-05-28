"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VouchersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let VouchersService = class VouchersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        return this.prisma.voucher.create({
            data: {
                code: data.code,
                discount: data.discount,
                isPercentage: data.isPercentage,
                expiredAt: new Date(data.expiredAt),
            },
        });
    }
    async findAll() {
        return this.prisma.voucher.findMany({
            orderBy: {
                id: 'desc',
            },
        });
    }
    async findOne(id) {
        const voucher = await this.prisma.voucher.findUnique({
            where: {
                id,
            },
        });
        if (!voucher) {
            throw new common_1.NotFoundException('Voucher not found');
        }
        return voucher;
    }
    async apply(data) {
        const voucher = await this.prisma.voucher.findFirst({
            where: {
                code: data.code,
            },
        });
        if (!voucher) {
            throw new common_1.BadRequestException('Voucher invalid');
        }
        const now = new Date();
        if (voucher.expiredAt < now) {
            throw new common_1.BadRequestException('Voucher expired');
        }
        let finalTotal = data.total;
        if (voucher.isPercentage) {
            finalTotal = data.total - (data.total * voucher.discount) / 100;
        }
        else {
            finalTotal = data.total - voucher.discount;
        }
        if (finalTotal < 0) {
            finalTotal = 0;
        }
        return {
            voucher: voucher.code,
            discount: voucher.discount,
            finalTotal,
        };
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.voucher.delete({
            where: {
                id,
            },
        });
    }
};
exports.VouchersService = VouchersService;
exports.VouchersService = VouchersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VouchersService);
//# sourceMappingURL=vouchers.service.js.map