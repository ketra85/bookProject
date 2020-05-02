"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const nest_winston_1 = require("nest-winston");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useLogger(app.get(nest_winston_1.WINSTON_MODULE_PROVIDER));
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map