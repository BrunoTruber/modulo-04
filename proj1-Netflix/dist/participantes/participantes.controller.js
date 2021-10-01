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
exports.ParticipantesController = void 0;
const common_1 = require("@nestjs/common");
const create_participantes_dto_1 = require("./dto/create-participantes.dto");
const participantes_service_1 = require("./participantes.service");
let ParticipantesController = class ParticipantesController {
    constructor(participantesService) {
        this.participantesService = participantesService;
    }
    async create(createParticipante) {
        return this.participantesService.createParticipante(createParticipante);
    }
    async findMany() {
        return this.participantesService.getAll();
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_participantes_dto_1.CreateParticipanteDto]),
    __metadata("design:returntype", Promise)
], ParticipantesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/listar'),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ParticipantesController.prototype, "findMany", null);
ParticipantesController = __decorate([
    (0, common_1.Controller)('participantes'),
    __metadata("design:paramtypes", [participantes_service_1.ParticipantesService])
], ParticipantesController);
exports.ParticipantesController = ParticipantesController;
//# sourceMappingURL=participantes.controller.js.map