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
const book_entity_1 = require("./book.entity");
let BooksService = class BooksService {
    constructor(booksRepository) {
        this.booksRepository = booksRepository;
    }
    create(createBookDto) {
        const book = new book_entity_1.Book();
        book.bookId = createBookDto.bookId;
        return this.booksRepository.save(book);
    }
    async findAll() {
        return this.booksRepository.find();
    }
    findOne(id) {
        return this.booksRepository.findOne(id);
    }
    async remove(id) {
        await this.booksRepository.delete(id);
    }
};
BooksService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(book_entity_1.Book)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map