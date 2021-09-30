import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
   await prisma.usuario.create({
         data: {
            id: 'user-3',
            name: 'John3',
            email: 'teste',
            groups: {
              connectOrCreate:[
                  {
                  where: {
                      id: 'group3'
                  },
                  create: {
                      id: 'group3',
                      title: 'testete'
                },
                // se eu quiser adicionar mais grupos
               },
            ]
          }
        }
    })
}

main();