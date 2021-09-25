import { CreateFilmeDto } from './dto/create-filme.dto';
import { FilmesService } from './filmes.service';
import { Filme } from '.prisma/client';
export declare class FilmesController {
    private filmesService;
    constructor(filmesService: FilmesService);
    index(): Promise<Filme[]>;
    getById(id: number): Promise<Filme>;
    create(createFilme: CreateFilmeDto): Promise<Filme>;
    Delete(id: number): Promise<any>;
}
