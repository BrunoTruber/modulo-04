import { CreateParticipanteDto } from './dto/create-participantes.dto';
import { ParticipantesService } from './participantes.service';
import { Participante } from '@prisma/client';
export declare class ParticipantesController {
    private participantesService;
    constructor(participantesService: ParticipantesService);
    create(createParticipante: CreateParticipanteDto): Promise<Participante>;
    findMany(): Promise<Participante[]>;
}
