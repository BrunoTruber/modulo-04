import { PrismaService } from 'src/prisma/prisma.service';
import { Participante, Prisma } from '.prisma/client';
export declare class ParticipantesService {
    private prisma;
    constructor(prisma: PrismaService);
    createParticipante(data: Prisma.ParticipanteCreateInput): Promise<Participante>;
    getAll(): Promise<Participante[]>;
}
