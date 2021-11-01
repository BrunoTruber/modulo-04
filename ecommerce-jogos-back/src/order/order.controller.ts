/* eslint-disable prettier/prettier */
import { UseGuards, Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { OrderService } from './order.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateOrderDto } from '../order/dto/create-order.dto';
import { Order } from './order.entity';

@UseGuards(AuthGuard())
@ApiTags('order')
@Controller('order')
export class OrderController {
    constructor(private service: OrderService) {}

  @Post('/create')
  @UsePipes(ValidationPipe)
  create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
    return this.service.postOrder(createOrderDto);
  }

  @Get()
  @UsePipes(ValidationPipe)
  findAll() {
    return this.service.find();
  }
}
