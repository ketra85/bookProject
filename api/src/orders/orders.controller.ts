
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './order.entity';

@Controller('orders')
export class OrdersController {
    constructor(private readonly ordersService: OrdersService) {}

    @Post()
    create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.ordersService.create(createOrderDto);
    }

    @Get()
    findAll(): Promise<Order[]> {
        return this.ordersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Order> {
        return this.ordersService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
        return this.ordersService.remove(id);
    }
}