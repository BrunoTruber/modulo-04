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
            const exist = await prisma.group.findUnique({ where: { id: item}})

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

app.post('/', async (req, res) => {
    const record = req.body;
    createUser(record.name, record.email, record.groups);
    res.status(201).send(record);
});

app.get('/', async (req, res) => {
    const record = await prisma.user.findMany();
    res.status(200).send(record);
});

// app.get('/:id', async (req, res) => {
//     const record = await prisma.user.findUnique(id);
//     res.status(201).send(record);
// });

app.delete('/', async (req, res) => {
    const record = await prisma.user.deleteMany();
    res.status(201).send(record);
});

const server = app.listen(PORT, () => {
    console.log(`listening on port${PORT}`);
});