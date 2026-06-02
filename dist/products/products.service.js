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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data, file) {
        try {
            const imagePath = file ? file.filename || file.path : 'default-hardware.jpg';
            let parsedSpecs = data.specs;
            if (typeof parsedSpecs === 'string') {
                try {
                    parsedSpecs = JSON.parse(parsedSpecs);
                }
                catch {
                    parsedSpecs = { detail: data.specs };
                }
            }
            return await this.prisma.product.create({
                data: {
                    name: data.name,
                    price: Number(data.price),
                    stock: Number(data.stock),
                    categoryId: Number(data.categoryId),
                    specs: parsedSpecs,
                    imageUrl: imagePath,
                },
            });
        }
        catch (error) {
            console.error("🚨 DETAIL ERROR PRISMA DB:", error);
            throw new common_1.InternalServerErrorException("Gagal menyimpan produk. Pastikan value categoryId (ID Kategori) sudah terdaftar di database kamu!");
        }
    }
    async findAll(categoryId, minPrice, maxPrice) {
        return this.prisma.product.findMany({
            where: {
                categoryId,
                price: {
                    gte: minPrice,
                    lte: maxPrice,
                },
            },
            include: {
                category: true,
            },
            orderBy: {
                id: 'desc',
            },
        });
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: {
                id,
            },
            include: {
                category: true,
                reviews: true,
            },
        });
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        return product;
    }
    async update(id, data, file) {
        await this.findOne(id);
        try {
            const updateData = {
                name: data.name,
                price: data.price ? Number(data.price) : undefined,
                stock: data.stock ? Number(data.stock) : undefined,
                categoryId: data.categoryId ? Number(data.categoryId) : undefined,
            };
            if (file) {
                updateData.imageUrl = file.filename || file.path;
            }
            if (data.specs) {
                updateData.specs = typeof data.specs === 'string' ? JSON.parse(data.specs) : data.specs;
            }
            return await this.prisma.product.update({
                where: { id },
                data: updateData,
            });
        }
        catch (error) {
            console.error("🚨 DETAIL ERROR UPDATE PRISMA DB:", error);
            throw new common_1.InternalServerErrorException("Gagal memperbarui data produk.");
        }
    }
    async remove(id) {
        await this.findOne(id);
        await this.prisma.cartItem.deleteMany({
            where: { productId: id }
        });
        await this.prisma.wishlist.deleteMany({
            where: { productId: id }
        });
        await this.prisma.review.deleteMany({
            where: { productId: id }
        });
        await this.prisma.orderItem.deleteMany({
            where: { productId: id }
        });
        return this.prisma.product.delete({
            where: { id }
        });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map