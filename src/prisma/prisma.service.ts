import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';

import { PrismaClient } from '.prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private _payment: any;
  public get payment(): any {
    return this._payment;
  }
  public set payment(value: any) {
    this._payment = value;
  }
  private _wishlist: any;
  public get wishlist(): any {
    return this._wishlist;
  }
  public set wishlist(value: any) {
    this._wishlist = value;
  }
  private _review: any;
  public get review(): any {
    return this._review;
  }
  public set review(value: any) {
    this._review = value;
  }
  private _voucher: any;
  public get voucher(): any {
    return this._voucher;
  }
  public set voucher(value: any) {
    this._voucher = value;
  }
  private _orderitem: any;
  public get orderitem(): any {
    return this._orderitem;
  }
  public set orderitem(value: any) {
    this._orderitem = value;
  }
  private _cart: any;
  public get cart(): any {
    return this._cart;
  }
  public set cart(value: any) {
    this._cart = value;
  }
  private _cartitem: any;
  public get cartitem(): any {
    return this._cartitem;
  }
  public set cartitem(value: any) {
    this._cartitem = value;
  }
  private _category: any;
  public get category(): any {
    return this._category;
  }
  public set category(value: any) {
    this._category = value;
  }
  private _user: any;
  public get user(): any {
    return this._user;
  }
  public set user(value: any) {
    this._user = value;
  }
  private _product: any;
  public get product(): any {
    return this._product;
  }
  public set product(value: any) {
    this._product = value;
  }
  private _order: any;
  public get order(): any {
    return this._order;
  }
  public set order(value: any) {
    this._order = value;
  }
  async onModuleInit() {
    await this.$connect();
  }
  async $connect() {
    await super.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    process.on('beforeExit', async () => {
      await app.close();
    });
  }
}
