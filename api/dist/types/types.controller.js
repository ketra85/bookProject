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
const common_1 = require("@nestjs/common");
const types_service_1 = require("./types.service");
const create_type_dto_1 = require("./dto/create-type.dto");
let TypesController = class TypesController {
    constructor(typesService) {
        this.typesService = typesService;
    }
    create(createTypeDto) {
        return this.typesService.create(createTypeDto);
    }
    findAll() {
        return this.typesService.findAll();
    }
    findOne(id) {
        return this.typesService.findOne(id);
    }
    remove(id) {
        return this.typesService.remove(id);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_type_dto_1.CreateTypeDto]),
    __metadata("design:returntype", Promise)
], TypesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TypesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TypesController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TypesController.prototype, "remove", null);
TypesController = __decorate([
    common_1.Controller('types'),
    __metadata("design:paramtypes", [types_service_1.TypesService])
], TypesController);
exports.TypesController = TypesController;
//# sourceMappingURL=types.controller.js.map