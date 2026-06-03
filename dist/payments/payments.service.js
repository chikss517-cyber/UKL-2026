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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const verify_payment_dto_1 = require("./dto/verify-payment.dto");
let PaymentsService = class PaymentsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const order = await this.prisma.order.findUnique({
            where: {
                id: data.orderId,
            },
        });
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        return this.prisma.payment.create({
            data: {
                orderId: data.orderId,
                amount: data.amount,
                proofUrl: data.proofUrl,
            },
        });
    }
    async findAll() {
        return this.prisma.payment.findMany({
            orderBy: {
                id: 'desc',
            },
        });
    }
    async findOne(id) {
        const payment = await this.prisma.payment.findUnique({
            where: {
                id,
            },
        });
        if (!payment) {
            throw new common_1.NotFoundException('Payment not found');
        }
        return payment;
    }
    async uploadProof(id, proofUrl) {
        await this.findOne(id);
        return this.prisma.payment.update({
            where: {
                id,
            },
            data: {
                proofUrl,
                status: verify_payment_dto_1.PaymentStatus.WAITING_VERIFICATION,
            },
        });
    }
    async verify(id, status) {
        const payment = await this.findOne(id);
        return this.prisma.$transaction(async (tx) => {
            const updatedPayment = await tx.payment.update({
                where: {
                    id,
                },
                data: {
                    status: status,
                },
            });
            if (status === verify_payment_dto_1.PaymentStatus.PAID) {
                await tx.orders.update({
                    where: {
                        id: payment.orderId,
                    },
                    data: {
                        status: 'PAID',
                    },
                });
            }
            return updatedPayment;
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.payment.delete({
            where: {
                id,
            },
        });
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map