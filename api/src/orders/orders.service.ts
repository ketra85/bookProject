import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly ordersRepository: Repository<Order>,
    ) {}

    create(createOrderDto: CreateOrderDto): Promise<Order> {
        const order = new Order();
        order.orderId = createOrderDto.orderId;

        return this.ordersRepository.save(order);
    }

    async findAll(): Promise<Order[]> {
        return this.ordersRepository.find();
    }

    findOne(id: string): Promise<Order> {
        return this.ordersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.ordersRepository.delete(id);
    }
}