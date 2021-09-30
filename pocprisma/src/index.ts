import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.create({
    data: {
      id: "user-0",
      name: "Bruno",
      email: "bruno@prisma",
      groups: {
        connectOrCreate: [
          {
            where: {
              id: 'group3'
            },
            create: {
              id: 'group3',
              title: 'nao gostei de prisma'
            },
            // se eu quiser adicionar mais grupos
          },//inicia o objeto na linha abaixo
        ]
      }
    }
  })
}


main();
