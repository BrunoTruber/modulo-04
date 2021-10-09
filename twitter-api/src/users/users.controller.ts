/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Param, UseGuards, UsePipes, ValidationPipe, Delete} from '@nestjs/common';
import { User, Prisma } from '.prisma/client';
// import { CreateUsersDto } from './users.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('users')
export class UsersController {
  constructor(private service: UsersService) {}
  
  @Post('/create-account')
  create(@Body() data: Prisma.UserCreateInput): Promise<User> {
    return this.service.create(data);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findMany(): Promise<User[]> {
    return this.service.findMany()
  }

  @Get(':id')
  findUnique(@Param('id') id: number): Promise<User> {
    return this.service.findUnique(id);
  }


  @Delete('/delete/:id')
  @UsePipes(ValidationPipe)
  async delete(@Param('id') id: number) {
    return this.service.deleteOneUser({ id: Number(id) });
  }
}
