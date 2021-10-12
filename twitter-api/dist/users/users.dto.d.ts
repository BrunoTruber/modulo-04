export declare class CreateUsersDto {
    id: number;
    username: string;
    senha: string;
    displayName: string;
    imagem: string;
    bio: string;
    nascimento: Date;
    createdAt: Date;
    updatedAt: Date;
    tweets: number[];
    follows: number[];
    likes: number[];
}
