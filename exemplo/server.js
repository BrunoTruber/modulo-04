const express = require('express');
const cors = require('cors');

const { PrismaClient } = require('@prisma/client')

const PORT = 3000;
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());


async function createUser(name, email, groups) {
    const grouped = [];

    await Promise.all(
        groups.map(async (item) => {
            const exist = await prisma.group.findUnique({ wher: { id: item}})

            if (exist) {
                grouped.push({ id: item });
            } else {
                console.log(`Group ${item} nao existe`);
            }
        })
    )

    const creating = await prisma.user.create({
        data: {
            name: name,
            email: email,
            groups: {
                connect: grouped,
            },
        },
    });
}