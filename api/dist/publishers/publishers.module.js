"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const publishers_controller_1 = require("./publishers.controller");
const publishers_service_1 = require("./publishers.service");
const publisher_entity_1 = require("./publisher.entity");
let PublishersModule = class PublishersModule {
};
PublishersModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([publisher_entity_1.Publisher])],
        providers: [publishers_service_1.PublishersService],
        controllers: [publishers_controller_1.PublishersController],
    })
], PublishersModule);
exports.PublishersModule = PublishersModule;
//# sourceMappingURL=publishers.module.js.map