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
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let OrdersService = class OrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async checkout(userId, dto) {
        console.log('REQ USER =', userId);
        if (!dto.items || dto.items.length === 0) {
            throw new common_1.NotFoundException('Tidak ada item yang dikirim!');
        }
        let total = 0;
        for (const item of dto.items) {
            const product = await this.prisma.product.findUnique({
                where: { id: Number(item.productId || item.id) },
            });
            if (!product) {
                throw new common_1.NotFoundException(`Produk ID ${item.productId || item.id} tidak ditemukan`);
            }
            const user = await this.prisma.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                throw new common_1.NotFoundException(`User dengan id ${userId} tidak ditemukan`);
            }
            total += product.price * item.quantity;
        }
        const shippingCost = total >= 500000 ? 0 : 25000;
        const grandTotal = total + shippingCost;
        return this.prisma.$transaction(async (tx) => {
            console.log('userId =', userId);
            const order = await tx.order.create({
                data: {
                    userId,
                    total: grandTotal,
                    status: 'PENDING',
                },
            });
            for (const item of dto.items) {
                const product = await tx.product.findUnique({
                    where: { id: Number(item.productId || item.id) },
                });
                await tx.orderitem.create({
                    data: {
                        orderId: order.id,
                        productId: product.id,
                        quantity: item.quantity,
                        price: product.price,
                        totalPrice: product.price * item.quantity,
                    },
                });
                await tx.product.update({
                    where: { id: product.id },
                    data: {
                        stock: {
                            decrement: item.quantity,
                        },
                    },
                });
            }
            return order;
        });
    }
    async findByUser(userId) {
        return this.prisma.order.findMany({
            where: { userId },
            orderBy: {
                id: 'desc',
            },
        });
    }
    async findAll() {
        return this.prisma.order.findMany({
            orderBy: { id: 'desc' },
        });
    }
    async findOne(id) {
        const order = await this.prisma.order.findUnique({
            where: { id },
        });
        if (!order) {
            throw new common_1.NotFoundException('Data pesanan tidak ditemukan');
        }
        return order;
    }
    async updateStatus(id, status) {
        await this.findOne(id);
        return this.prisma.order.update({
            where: { id },
            data: { status },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.order.delete({
            where: { id },
        });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map