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
const author_entity_1 = require("./author.entity");
let AuthorsService = class AuthorsService {
    constructor(authorsRepository) {
        this.authorsRepository = authorsRepository;
    }
    create(createAuthorDto) {
        const author = new author_entity_1.Author();
        author.authorId = createAuthorDto.authorId;
        return this.authorsRepository.save(author);
    }
    async findAll() {
        return this.authorsRepository.find();
    }
    findOne(id) {
        return this.authorsRepository.findOne(id);
    }
    async remove(id) {
        await this.authorsRepository.delete(id);
    }
};
AuthorsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(author_entity_1.Author)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AuthorsService);
exports.AuthorsService = AuthorsService;
//# sourceMappingURL=authors.service.js.map