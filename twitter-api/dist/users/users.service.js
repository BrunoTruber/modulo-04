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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const bcrypt = require("bcrypt");
const users_dto_1 = require("./users.dto");
let UsersService = class UsersService {
    constructor(db) {
        this.db = db;
    }
    async findMany() {
        return this.db.user.findMany();
    }
    async findUnique(id) {
        const user = await this.db.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new common_1.NotFoundException();
        }
        return user;
    }
    async create(data) {
        const existing = await this.db.user.findUnique({
            where: { username: data.username },
        });
        if (existing) {
            throw new common_1.ConflictException('username already exists');
        }
        const hashedPassword = await bcrypt.hash(data.senha, 10);
        const user = await this.db.user.create({
            data: Object.assign(Object.assign({}, data), { senha: hashedPassword }),
        });
        return user;
    }
    async updateOneUser(id, user) {
        return await this.db.user.update({
            data: Object.assign(Object.assign({}, user), { id: undefined }),
            where: {
                id,
            }
        });
    }
    async deleteOneUser(where) {
        return this.db.user.delete({ where });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map