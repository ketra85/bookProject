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
const books_module_1 = require("./books/books.module");
const authors_module_1 = require("./authors/authors.module");
const publishers_module_1 = require("./publishers/publishers.module");
const genres_module_1 = require("./genres/genres.module");
const types_module_1 = require("./types/types.module");
const orders_module_1 = require("./orders/orders.module");
const auth_module_1 = require("./auth/auth.module");
const nest_winston_1 = require("nest-winston");
const winston = require("winston");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'A!612842',
                database: 'postgres',
                autoLoadEntities: true,
                synchronize: true,
            }),
            books_module_1.BooksModule,
            authors_module_1.AuthorsModule,
            publishers_module_1.PublishersModule,
            genres_module_1.GenresModule,
            types_module_1.TypesModule,
            orders_module_1.OrdersModule,
            auth_module_1.AuthModule,
            nest_winston_1.WinstonModule.forRoot({
                transports: [
                    new winston.transports.Console({
                        format: winston.format.combine(winston.format.timestamp(), nest_winston_1.utilities.format.nestLike()),
                    })
                ]
            }),
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map