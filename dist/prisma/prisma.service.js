"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require(".prisma/client");
let PrismaService = class PrismaService extends client_1.PrismaClient {
    get payment() {
        return this._payment;
    }
    set payment(value) {
        this._payment = value;
    }
    get wishlist() {
        return this._wishlist;
    }
    set wishlist(value) {
        this._wishlist = value;
    }
    get review() {
        return this._review;
    }
    set review(value) {
        this._review = value;
    }
    get voucher() {
        return this._voucher;
    }
    set voucher(value) {
        this._voucher = value;
    }
    get orderitem() {
        return this._orderitem;
    }
    set orderitem(value) {
        this._orderitem = value;
    }
    get cart() {
        return this._cart;
    }
    set cart(value) {
        this._cart = value;
    }
    get cartitem() {
        return this._cartitem;
    }
    set cartitem(value) {
        this._cartitem = value;
    }
    get category() {
        return this._category;
    }
    set category(value) {
        this._category = value;
    }
    get user() {
        return this._user;
    }
    set user(value) {
        this._user = value;
    }
    get product() {
        return this._product;
    }
    set product(value) {
        this._product = value;
    }
    get order() {
        return this._order;
    }
    set order(value) {
        this._order = value;
    }
    async onModuleInit() {
        await this.$connect();
    }
    async $connect() {
        await super.$connect();
    }
    async enableShutdownHooks(app) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)()
], PrismaService);
//# sourceMappingURL=prisma.service.js.map