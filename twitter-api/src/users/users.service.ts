import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { User, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private db: PrismaService) {}

  async findMany(): Promise<User[]> {
    return this.db.user.findMany();
  }

  async findUnique(id: number): Promise<User> {
    const user = await this.db.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const existing = await this.db.user.findUnique({
      where: { id: data.id },
    });

    if (existing) {
      throw new ConflictException('username already exists');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.db.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    return user;
  }

  async deleteOneUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.db.user.delete({ where });
  }
}
