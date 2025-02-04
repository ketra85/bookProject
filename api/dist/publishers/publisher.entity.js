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
const book_entity_1 = require("../books/book.entity");
let Publisher = class Publisher {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Publisher.prototype, "publisherId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Publisher.prototype, "publisherName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Publisher.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Publisher.prototype, "phone", void 0);
__decorate([
    typeorm_1.OneToMany(type => book_entity_1.Book, book => book.publisher),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Publisher.prototype, "books", void 0);
Publisher = __decorate([
    typeorm_1.Entity()
], Publisher);
exports.Publisher = Publisher;
//# sourceMappingURL=publisher.entity.js.map