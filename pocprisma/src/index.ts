import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /**
   * Para criar usuários e grupos juntos
   */
  await prisma.usuario.create({
    data: {
      id: 'user1',
      name: 'Francielly Freitas',
      email: 'fran@gmail.com',
      groups: {
        connectOrCreate: [
          {
            where: {
              id: 'group1',
            },
            create: {
              id: 'group1',
              title: 'Eu odeio segunda-feira',
            },
          },
          {
            where: {
              id: 'group2',
            },
            create: {
              id: 'group2',
              title: 'Eu odeio o Prisma',
            },
          },
          {
            where: {
              id: 'group3',
            },
            create: {
              id: 'group3',
              title: 'Flamengo vai ser campeão!',
            },
          },
        ],
      },
    },
  });

  /**
   * Deletar todos os campos
   */
  // await prisma.user.deleteMany();
  // await prisma.group.deleteMany();

  /**
   * Deletar um campo
   */
  //  await prisma.user.delete({ where: { id: 'user2' } });

  /**
   * Alterar nome do usuário por ID
   */
  //await prisma.user.update({ where: { id: 'user1' }, data: { name: 'Sinara' }, })

  /**
   * Alterar nome do grupo por ID
   */
  //await prisma.group.update({ where: { id: 'group3' }, data: { title: 'Palmeiras tem mundial?' }, })

  /**
   * Criar usuário, agora considerando o autoincrement, é necessário modificar o schema
   */
  // await prisma.user.create({
  //   data: {
  //     name: 'Francielly Freitas',
  //     email: 'fran@gmail.com',
  //     groups: {
  //       connectOrCreate: [
  //         {
  //           where: {
  //             id: 1,
  //           },
  //           create: {
  //             id: 1,
  //             title: 'Eu odeio segunda-feira',
  //           },
  //         },
  //         {
  //           where: {
  //             id: 2,
  //           },
  //           create: {
  //             id: 2,
  //             title: 'Eu amo Goiás',
  //           },
  //         },
  //         {
  //           where: {
  //             id: 3
  //           },
  //           create: {
  //             id: 3,
  //             title: 'Flamengo vai ser campeão!',
  //           },
  //         },
  //       ],
  //     },
  //   },
  // });
}

main();
