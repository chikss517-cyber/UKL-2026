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
exports.CartService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CartService = class CartService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async addToCart(userId, data) {
        let cart = await this.prisma.cart.findFirst({
            where: {
                userId,
            },
        });
        if (!cart) {
            cart = await this.prisma.cart.create({
                data: {
                    userId,
                },
            });
        }
        const existingItem = await this.prisma.cartitem.findFirst({
            where: {
                cartId: cart.id,
                productId: data.productId,
            },
        });
        if (existingItem) {
            return this.prisma.cartitem.update({
                where: {
                    id: existingItem.id,
                },
                data: {
                    quantity: existingItem.quantity + data.quantity,
                },
            });
        }
        return this.prisma.cartitem.create({
            data: {
                cartId: cart.id,
                productId: data.productId,
                quantity: data.quantity,
            },
        });
    }
    async findCart(userId) {
        const cart = await this.prisma.cart.findFirst({
            where: {
                userId,
            },
        });
        if (!cart) {
            return null;
        }
        const cartItems = await this.prisma.cartitem.findMany({
            where: {
                cartId: cart.id,
            },
            include: {
                product: true,
            },
        });
        return {
            ...cart,
            cartItems,
        };
    }
    async updateQuantity(itemId, data) {
        const item = await this.prisma.cartitem.findUnique({
            where: {
                id: itemId,
            },
        });
        if (!item) {
            throw new common_1.NotFoundException('Cart item not found');
        }
        return this.prisma.cartitem.update({
            where: {
                id: itemId,
            },
            data: {
                quantity: data.quantity,
            },
        });
    }
    async removeItem(itemId) {
        const item = await this.prisma.cartitem.findUnique({
            where: {
                id: itemId,
            },
        });
        if (!item) {
            throw new common_1.NotFoundException('Cart item not found');
        }
        return this.prisma.cartitem.delete({
            where: {
                id: itemId,
            },
        });
    }
    async clearCart(userId) {
        const cart = await this.prisma.cart.findFirst({
            where: {
                userId,
            },
        });
        if (!cart) {
            throw new common_1.NotFoundException('Cart not found');
        }
        return this.prisma.cartitem.deleteMany({
            where: {
                cartId: cart.id,
            },
        });
    }
};
exports.CartService = CartService;
exports.CartService = CartService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], CartService);
//# sourceMappingURL=cart.service.js.map