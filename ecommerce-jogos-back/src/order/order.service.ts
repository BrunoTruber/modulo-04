/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../order/dto/create-order.dto'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
//import { User } from ''

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepository: Repository<Order>) {}

        async find() {
            return await this.orderRepository.find()
          }

        async postOrder(createOrderDto: CreateOrderDto) {
            const order = this.orderRepository.create({ ...createOrderDto });
            return await this.orderRepository.save(order);
          }
}
