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
const typeorm_1 = require("typeorm");
const author_entity_1 = require("../authors/author.entity");
const genre_entity_1 = require("../genres/genre.entity");
const type_entity_1 = require("../types/type.entity");
const order_entity_1 = require("../orders/order.entity");
const publisher_entity_1 = require("../publishers/publisher.entity");
let Book = class Book {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Book.prototype, "bookId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Book.prototype, "publisherId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Book.prototype, "publishedYear", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Book.prototype, "pages", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Book.prototype, "price", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "cdnLink", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Book.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.ManyToMany(type => author_entity_1.Author),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Book.prototype, "authors", void 0);
__decorate([
    typeorm_1.ManyToOne(type => publisher_entity_1.Publisher, publisher => publisher.books),
    __metadata("design:type", publisher_entity_1.Publisher)
], Book.prototype, "publisher", void 0);
__decorate([
    typeorm_1.ManyToMany(type => genre_entity_1.Genre),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Book.prototype, "genres", void 0);
__decorate([
    typeorm_1.OneToOne(type => type_entity_1.Type),
    __metadata("design:type", type_entity_1.Type)
], Book.prototype, "type", void 0);
__decorate([
    typeorm_1.ManyToMany(type => order_entity_1.Order),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Book.prototype, "orders", void 0);
Book = __decorate([
    typeorm_1.Entity()
], Book);
exports.Book = Book;
//# sourceMappingURL=book.entity.js.map