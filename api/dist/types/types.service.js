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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const type_entity_1 = require("./type.entity");
let TypesService = class TypesService {
    constructor(typesRepository) {
        this.typesRepository = typesRepository;
    }
    create(createTypeDto) {
        const type = new type_entity_1.Type();
        type.typeId = createTypeDto.typeId;
        return this.typesRepository.save(type);
    }
    async findAll() {
        return this.typesRepository.find();
    }
    findOne(id) {
        return this.typesRepository.findOne(id);
    }
    async remove(id) {
        await this.typesRepository.delete(id);
    }
};
TypesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(type_entity_1.Type)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TypesService);
exports.TypesService = TypesService;
//# sourceMappingURL=types.service.js.map