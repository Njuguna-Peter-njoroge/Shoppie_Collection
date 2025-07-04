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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartItemController = void 0;
const common_1 = require("@nestjs/common");
const cartitem_service_1 = require("./cartitem.service");
const addtocart_dto_1 = require("./dtos/addtocart.dto");
const passport_1 = require("@nestjs/passport");
let CartItemController = class CartItemController {
    cartItemService;
    constructor(cartItemService) {
        this.cartItemService = cartItemService;
    }
    async addToCart(userId, dto) {
        return this.cartItemService.addToCart(userId, dto.productId, dto.quantity);
    }
    getCart(userId) {
        return this.cartItemService.getCart(userId);
    }
    async removeFromCart(itemId) {
        return this.cartItemService.removeFromCart(itemId);
    }
};
exports.CartItemController = CartItemController;
__decorate([
    (0, common_1.Post)('add/:userId'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, addtocart_dto_1.AddToCartDto]),
    __metadata("design:returntype", Promise)
], CartItemController.prototype, "addToCart", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CartItemController.prototype, "getCart", null);
__decorate([
    (0, common_1.Delete)('items/:itemId'),
    __param(0, (0, common_1.Param)('itemId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CartItemController.prototype, "removeFromCart", null);
exports.CartItemController = CartItemController = __decorate([
    (0, common_1.Controller)('cart'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [cartitem_service_1.CartItemService])
], CartItemController);
//# sourceMappingURL=cartitem.controller.js.map